/* eslint-disable no-undef */
module.exports = {
  auth: {
    verifyIdToken: jest.fn(() =>
      Promise.resolve({ uid: "mock-user-id", name: "Mock User" })
    ),
  },
  db: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        get: jest.fn(() =>
          Promise.resolve({
            data: () => ({ role: "admin" }),
          })
        ),
      })),
    })),
  },
  app: {},
};
