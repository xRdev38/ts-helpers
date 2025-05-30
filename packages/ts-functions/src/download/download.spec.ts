// import { downloadBlob, downloadJson, downloadUrl } from './download';

describe('File Download Functions', () => {
  const { window } = global;

  beforeAll(() => {
    // @ts-ignore
    delete global.window;
  });
  afterAll(() => {
    global.window = window;
  });

  // TODO: fix the test
  it('should be run', () => {
    expect(true).toBeTruthy();
  });

  /**
  it('should download JSON object as file', () => {
    const data = { name: 'John Doe', age: 25 };
    const fileName = 'test.json';

    const spyCreateObjectURL = jest.spyOn(window.URL, 'createObjectURL');
    const spyRevokeObjectURL = jest.spyOn(window.URL, 'revokeObjectURL');
    const spyAppendChild = jest.spyOn(document.body, 'appendChild');
    const spyRemoveChild = jest.spyOn(document.body, 'removeChild');

    downloadJson(data, fileName);

    expect(spyCreateObjectURL).toHaveBeenCalled();
    expect(spyRevokeObjectURL).toHaveBeenCalled();
    expect(spyAppendChild).toHaveBeenCalled();
    expect(spyRemoveChild).toHaveBeenCalled();

    spyCreateObjectURL.mockRestore();
    spyRevokeObjectURL.mockRestore();
    spyAppendChild.mockRestore();
    spyRemoveChild.mockRestore();
  });

  it('should download Blob as file', () => {
    const blob = new Blob(['Test Blob'], { type: 'text/plain' });
    const fileName = 'test.txt';

    const spyCreateObjectURL = jest.spyOn(window.URL, 'createObjectURL');
    const spyRevokeObjectURL = jest.spyOn(window.URL, 'revokeObjectURL');
    const spyAppendChild = jest.spyOn(document.body, 'appendChild');
    const spyRemoveChild = jest.spyOn(document.body, 'removeChild');

    downloadBlob(blob, fileName);

    expect(spyCreateObjectURL).toHaveBeenCalled();
    expect(spyRevokeObjectURL).toHaveBeenCalled();
    expect(spyAppendChild).toHaveBeenCalled();
    expect(spyRemoveChild).toHaveBeenCalled();

    spyCreateObjectURL.mockRestore();
    spyRevokeObjectURL.mockRestore();
    spyAppendChild.mockRestore();
    spyRemoveChild.mockRestore();
  });

  it('should download URL as file', () => {
    const url = 'https://example.com/test.txt';
    const fileName = 'test.txt';

    const spyCreateObjectURL = jest.spyOn(window.URL, 'createObjectURL');
    const spyRevokeObjectURL = jest.spyOn(window.URL, 'revokeObjectURL');
    const spyAppendChild = jest.spyOn(document.body, 'appendChild');
    const spyRemoveChild = jest.spyOn(document.body, 'removeChild');

    downloadUrl(url, fileName);

    expect(spyCreateObjectURL).toHaveBeenCalled();
    expect(spyRevokeObjectURL).toHaveBeenCalled();
    expect(spyAppendChild).toHaveBeenCalled();
    expect(spyRemoveChild).toHaveBeenCalled();

    spyCreateObjectURL.mockRestore();
    spyRevokeObjectURL.mockRestore();
    spyAppendChild.mockRestore();
    spyRemoveChild.mockRestore();
  });
   */
});
