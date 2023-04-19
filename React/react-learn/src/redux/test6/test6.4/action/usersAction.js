export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
// 添加用户action函数
export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})
// 删除用户action函数
export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})
// 修改用户action函数
export const createUpdateUserAction = (id, newUserData) => ({
    type: DELETEUSER,
    payload: {
        ...newUserData,
        id
    }
})