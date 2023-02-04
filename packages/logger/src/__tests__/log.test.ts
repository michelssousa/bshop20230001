import logger from '../index'

describe("logger", () => {
  const v = 1
  it("prints a message", () => {
    logger.info('start logger on project')
    expect(v).toBe(1);
  });
});
