import { lmngService } from "../utils/services/lmng.service";
import { expect } from "chai";
import { ASSERTION_ERRORS, ERROR_TEXTS } from "../data/constants";
import { LoginUser } from "../utils/http/interfaces";

describe('Login tests', () => {
    [
        { email: 'random@Email.com', password: 'randomPassword' },
        { email: 'correctPassword', password: 'correct@Email.com' },
        { email: 'correct@Email.com', password: undefined },
        { email: undefined, password: 'correctPassword' },
        { email: undefined, password: undefined },
        { email: 'correct@Email.com', password: null },
        { email: null, password: 'correctPassword' },
        { email: null, password: null },
        { email: '', password: '' },
        { email: 'randomString', password: 'correctPassword' },
        { email: 'randomString.com', password: 'correctPassword' },
        { email: 'random@String', password: 'correctPassword' }
    ].forEach(credentials => {
        it(`should error when pass '${credentials.email}' as email and '${credentials.password}' as password`, async () => {
            const loginData: LoginUser = {
                email: credentials.email,
                password: credentials.password,
                keepMeSignedIn: true,
                redirectUrl: ''
            };

            const response = await lmngService.postLogin(loginData);

            expect(response.status).to.be.equal(401, ASSERTION_ERRORS.RESPONSE_STATUS(401));
            expect(response.data.message).to.be.equal(ERROR_TEXTS.INVALID_CREDS, ASSERTION_ERRORS.RESPONSE_MESSAGE(ERROR_TEXTS.INVALID_CREDS));
            expect(response.data.code).to.be.equal(ERROR_TEXTS.INVALID_CREDENTIALS, ASSERTION_ERRORS.RESPONSE_MESSAGE(ERROR_TEXTS.INVALID_CREDENTIALS));
            expect(response.data.status).to.be.equal(401, ASSERTION_ERRORS.RESPONSE_MESSAGE(401));
        });
    });
});
