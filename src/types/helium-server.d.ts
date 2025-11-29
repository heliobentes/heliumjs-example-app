/* eslint-disable */
/**
* Auto generated file - DO NOT EDIT!
* # Helium Server Type Definitions    
**/
import type { getServerEnv as getServerEnv_0bei6lx } from '../server/env';
import type { getIP as getIP_1gle1aj } from '../server/get-ip';
import type { getProfile as getProfile_237ooc8 } from '../server/profile';
import type { updateProfile as updateProfile_3fuvn2y } from '../server/profile';
import type { getTasks as getTasks_4mlnf3a } from '../server/tasks/index';
import type { getTaskById as getTaskById_5tlmigf } from '../server/tasks/index';
import type { updateTaskStatus as updateTaskStatus_6hcixw8 } from '../server/tasks/index';
import type { createTask as createTask_7x7i65n } from '../server/tasks/index';
import type { deleteTask as deleteTask_86v9fre } from '../server/tasks/index';
import type { editTask as editTask_9dp6kui } from '../server/tasks/index';

declare module 'heliumts/server' {
export const getServerEnv: import('heliumts/client').MethodStub<
    Parameters<typeof getServerEnv_0bei6lx['handler']>[0],
    Awaited<ReturnType<typeof getServerEnv_0bei6lx['handler']>>
>;
export const getIP: import('heliumts/client').MethodStub<
    Parameters<typeof getIP_1gle1aj['handler']>[0],
    Awaited<ReturnType<typeof getIP_1gle1aj['handler']>>
>;
export const getProfile: import('heliumts/client').MethodStub<
    Parameters<typeof getProfile_237ooc8['handler']>[0],
    Awaited<ReturnType<typeof getProfile_237ooc8['handler']>>
>;
export const updateProfile: import('heliumts/client').MethodStub<
    Parameters<typeof updateProfile_3fuvn2y['handler']>[0],
    Awaited<ReturnType<typeof updateProfile_3fuvn2y['handler']>>
>;
export const getTasks: import('heliumts/client').MethodStub<
    Parameters<typeof getTasks_4mlnf3a['handler']>[0],
    Awaited<ReturnType<typeof getTasks_4mlnf3a['handler']>>
>;
export const getTaskById: import('heliumts/client').MethodStub<
    Parameters<typeof getTaskById_5tlmigf['handler']>[0],
    Awaited<ReturnType<typeof getTaskById_5tlmigf['handler']>>
>;
export const updateTaskStatus: import('heliumts/client').MethodStub<
    Parameters<typeof updateTaskStatus_6hcixw8['handler']>[0],
    Awaited<ReturnType<typeof updateTaskStatus_6hcixw8['handler']>>
>;
export const createTask: import('heliumts/client').MethodStub<
    Parameters<typeof createTask_7x7i65n['handler']>[0],
    Awaited<ReturnType<typeof createTask_7x7i65n['handler']>>
>;
export const deleteTask: import('heliumts/client').MethodStub<
    Parameters<typeof deleteTask_86v9fre['handler']>[0],
    Awaited<ReturnType<typeof deleteTask_86v9fre['handler']>>
>;
export const editTask: import('heliumts/client').MethodStub<
    Parameters<typeof editTask_9dp6kui['handler']>[0],
    Awaited<ReturnType<typeof editTask_9dp6kui['handler']>>
>;
}
