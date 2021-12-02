import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { AppState, Platform } from "react-native";
import {check, request, openSettings, PERMISSIONS, PermissionStatus } from 'react-native-permissions';

//Intern state
export interface PermissionsState {
  locationStatus: PermissionStatus,
}

//Initial state
export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
}


//Context info type
type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void,
  checkLocationPermission: () => void,
}

//Context
export const PermissionsContext = createContext({} as PermissionsContextProps);

//Provider Props
interface Props {
  children: JSX.Element | JSX.Element[],
}


//Provider
export const PermissionsProvider = ({children}:Props) => {

  const [permissions, setPermissions] = useState(permissionsInitState);

  useEffect(() => {
    //When App state has been updated: (Active, Background)
    AppState.addEventListener('change', state => {
      //console.log({state});
      if(state !== 'active') return;
      checkLocationPermission();
    });

    /* return () => {
      AppState.removeEventListener();
    } */
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if(Platform.OS == 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    if(permissionStatus === 'blocked') {
      openSettings();
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    })
  };

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if(Platform.OS == 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    })
  };


  //Manage state
  return (
    <PermissionsContext.Provider value={{
      permissions,
      askLocationPermission,
      checkLocationPermission,
    }}>
      {children}
    </PermissionsContext.Provider>
  );
}
