import setupMock, {failResponseWrap, successResponseWrap} from "../setup-mock";
import {MockParams} from "../mock";
// @ts-ignore
import Mock from 'mockjs';
setupMock({
    setup() {
        Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
            const {username, password} = JSON.parse(params.body);
            if (!username) {
                return failResponseWrap(null, '用户名不能为空', 50000);
            }
            if (!password) {
                return failResponseWrap(null, '密码不能为空', 50000);
            }
            if (username === 'admin' && password === 'admin') {
                window.localStorage.setItem('userRole', 'admin');
                return successResponseWrap({
                    token: '12345',
                    admin: true,
                });
            }
            if (username === 'user' && password === 'user') {
                window.localStorage.setItem('userRole', 'user');
                return successResponseWrap({
                    token: '54321',
                });
            }
            return failResponseWrap(null, '账号或者密码错误', 50000);
        });
        Mock.mock(new RegExp('/api/user/info'), (params: MockParams) => {
            return successResponseWrap({
                name: 'admin',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                rank: '高级用户',
                balance: '1000',
                phone: '123456789',
                email: '',
                role: window.localStorage.getItem('userRole') || '',
            })
        })
        Mock.mock(new RegExp('/api/user/register'), (params: MockParams) => {
          return successResponseWrap({
              state: 'success',
          })
        })
    }
})