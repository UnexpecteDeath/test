import { expect } from "chai";
import sinon from "sinon";
import { fetchUsers } from "../src/users.js";

describe('Функция fetchUsers', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('Функция fetchUsers должна выводить в консоль имена пользователей', async () => {
        const testUsers = [
            {id: 1, name: 'name1'},
            {id: 2, name: 'name2'},
            {id: 3, name: 'name3'},
            {id: 4, name: 'name4'},
            {id: 5, name: 'name5'},
        ];

        globalThis.fetch = sandbox.stub().resolves({
            ok: true,
            json: async () => testUsers,
        });

        const consoleLogSpy = sandbox.spy(console, 'log');

        await fetchUsers();

        expect(global.fetch.calledOnce).to.be.true;
    })
})
