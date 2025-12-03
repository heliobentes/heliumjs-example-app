/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_0ngtkrj } from '../server/env';
import type { getIP as getIP_1hj3hkd } from '../server/get-ip';
import type { getProfile as getProfile_2abji0a } from '../server/profile';
import type { updateProfile as updateProfile_3m8pz66 } from '../server/profile';
import type { getTasks as getTasks_4xefjvh } from '../server/tasks/index';
import type { getTaskById as getTaskById_5dw8eth } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_6t7277s } from '../server/tasks/index';
import type { createTask as createTask_71vcard } from '../server/tasks/index';
import type { deleteTask as deleteTask_8zu2qsd } from '../server/tasks/index';
import type { editTask as editTask_909avsb } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_0ngtkrj['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_0ngtkrj['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_1hj3hkd['handler']>[0],
    Awaited<ReturnType<typeof getIP_1hj3hkd['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_2abji0a['handler']>[0],
    Awaited<ReturnType<typeof getProfile_2abji0a['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_3m8pz66['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_3m8pz66['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4xefjvh['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4xefjvh['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_5dw8eth['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_5dw8eth['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_6t7277s['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_6t7277s['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_71vcard['handler']>[0],
    Awaited<ReturnType<typeof createTask_71vcard['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_8zu2qsd['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_8zu2qsd['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_909avsb['handler']>[0],
    Awaited<ReturnType<typeof editTask_909avsb['handler']>>
>;
}
