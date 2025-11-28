/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_0qyovo0 } from '../server/env';
import type { getIP as getIP_1wex6tj } from '../server/get-ip';
import type { getProfile as getProfile_2r3a0if } from '../server/profile';
import type { updateProfile as updateProfile_32lsgc5 } from '../server/profile';
import type { getTasks as getTasks_4k7fn6n } from '../server/tasks/index';
import type { getTaskById as getTaskById_5ogureo } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_61i0t74 } from '../server/tasks/index';
import type { createTask as createTask_79422if } from '../server/tasks/index';
import type { deleteTask as deleteTask_8kyusrn } from '../server/tasks/index';
import type { editTask as editTask_9jbp5lf } from '../server/tasks/index';

declare module 'helium/server' {
export const getServerEnv: import('helium/client').MethodStub<
    Parameters<typeof getServerEnv_0qyovo0['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_0qyovo0['handler']>>
>;
export const getIP: import('helium/client').MethodStub<
    Parameters<typeof getIP_1wex6tj['handler']>[0],
    Awaited<ReturnType<typeof getIP_1wex6tj['handler']>>
>;
export const getProfile: import('helium/client').MethodStub<
    Parameters<typeof getProfile_2r3a0if['handler']>[0],
    Awaited<ReturnType<typeof getProfile_2r3a0if['handler']>>
>;
export const updateProfile: import('helium/client').MethodStub<
    Parameters<typeof updateProfile_32lsgc5['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_32lsgc5['handler']>>
>;
export const getTasks: import('helium/client').MethodStub<
    Parameters<typeof getTasks_4k7fn6n['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4k7fn6n['handler']>>
>;
export const getTaskById: import('helium/client').MethodStub<
    Parameters<typeof getTaskById_5ogureo['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_5ogureo['handler']>>
>;
export const updateTaskStatus: import('helium/client').MethodStub<
    Parameters<typeof updateTaskStatus_61i0t74['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_61i0t74['handler']>>
>;
export const createTask: import('helium/client').MethodStub<
    Parameters<typeof createTask_79422if['handler']>[0],
    Awaited<ReturnType<typeof createTask_79422if['handler']>>
>;
export const deleteTask: import('helium/client').MethodStub<
    Parameters<typeof deleteTask_8kyusrn['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_8kyusrn['handler']>>
>;
export const editTask: import('helium/client').MethodStub<
    Parameters<typeof editTask_9jbp5lf['handler']>[0],
    Awaited<ReturnType<typeof editTask_9jbp5lf['handler']>>
>;
}
