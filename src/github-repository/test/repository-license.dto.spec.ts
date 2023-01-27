import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { RepositoryLicenseDTO } from '../dto/repository-license.dto';

describe('RepositoryLicenseDTO', () => {
	let licenseDtoMock: RepositoryLicenseDTO = {
		key: "my key",
        name: "string",
        url: "string",
        spdx_id: "string",
        node_id: "string",
        html_url: "string"
	};

	it('should create with valid properties', async () => {
		const dto = plainToInstance(RepositoryLicenseDTO, licenseDtoMock);
		await validateOrReject(dto);
		const { key } = dto;
		expect(key).toEqual('my key');
	});

	it('should not create with missing properties', async () => {
		const invalidMock = { ...licenseDtoMock };
		delete invalidMock.name;
		const dto = plainToInstance(RepositoryLicenseDTO, invalidMock);
		await expect(validateOrReject(dto)).rejects.toBeDefined();
	});

	it('should not create with invalid properties', async () => {
		const invalidMock = { ...licenseDtoMock };
		// @ts-expect-error // needed for this test
		invalidMock.key = 23444;
		const dto = plainToInstance(RepositoryLicenseDTO, invalidMock);
		await expect(validateOrReject(dto)).rejects.toBeDefined();
	});
});
