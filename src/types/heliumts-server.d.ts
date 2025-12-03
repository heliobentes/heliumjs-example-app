/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_02kik8a } from '../server/env';
import type { getIP as getIP_181ynp6 } from '../server/get-ip';
import type { getProfile as getProfile_2g9lx9q } from '../server/profile';
import type { updateProfile as updateProfile_38urfmu } from '../server/profile';
import type { getTasks as getTasks_4qszp59 } from '../server/tasks/index';
import type { getTaskById as getTaskById_5f85z95 } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_643hryi } from '../server/tasks/index';
import type { createTask as createTask_7hm7onn } from '../server/tasks/index';
import type { deleteTask as deleteTask_8hz9zyv } from '../server/tasks/index';
import type { editTask as editTask_9eew2k0 } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_02kik8a['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_02kik8a['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_181ynp6['handler']>[0],
    Awaited<ReturnType<typeof getIP_181ynp6['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_2g9lx9q['handler']>[0],
    Awaited<ReturnType<typeof getProfile_2g9lx9q['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_38urfmu['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_38urfmu['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4qszp59['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4qszp59['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_5f85z95['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_5f85z95['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_643hryi['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_643hryi['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_7hm7onn['handler']>[0],
    Awaited<ReturnType<typeof createTask_7hm7onn['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_8hz9zyv['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_8hz9zyv['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_9eew2k0['handler']>[0],
    Awaited<ReturnType<typeof editTask_9eew2k0['handler']>>
>;
}
