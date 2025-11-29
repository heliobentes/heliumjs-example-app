/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_0s4na4b } from '../server/env';
import type { getIP as getIP_1gjbedh } from '../server/get-ip';
import type { getProfile as getProfile_24ealws } from '../server/profile';
import type { updateProfile as updateProfile_3t4jbel } from '../server/profile';
import type { getTasks as getTasks_4ine7gn } from '../server/tasks/index';
import type { getTaskById as getTaskById_5gmzi7b } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_6ymc9ey } from '../server/tasks/index';
import type { createTask as createTask_7yqph36 } from '../server/tasks/index';
import type { deleteTask as deleteTask_8qtc4er } from '../server/tasks/index';
import type { editTask as editTask_94a9urw } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_0s4na4b['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_0s4na4b['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_1gjbedh['handler']>[0],
    Awaited<ReturnType<typeof getIP_1gjbedh['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_24ealws['handler']>[0],
    Awaited<ReturnType<typeof getProfile_24ealws['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_3t4jbel['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_3t4jbel['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4ine7gn['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4ine7gn['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_5gmzi7b['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_5gmzi7b['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_6ymc9ey['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_6ymc9ey['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_7yqph36['handler']>[0],
    Awaited<ReturnType<typeof createTask_7yqph36['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_8qtc4er['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_8qtc4er['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_94a9urw['handler']>[0],
    Awaited<ReturnType<typeof editTask_94a9urw['handler']>>
>;
}
