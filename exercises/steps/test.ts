import { steps } from ".";

import {} from "ts-jest";

let consoleLogSpy: jest.SpyInstance;

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
});

test("steps called with n = 1", () => {
  steps(1);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("#");
  expect(consoleLogSpy.mock.calls.length).toEqual(1);
});

test("steps called with n = 2", () => {
  steps(2);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("# ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("##");
  expect(consoleLogSpy.mock.calls.length).toEqual(2);
});

test("steps called with n = 3", () => {
  steps(3);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("#  ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("## ");
  expect(consoleLogSpy.mock.calls[2][0]).toEqual("###");
  expect(consoleLogSpy.mock.calls.length).toEqual(3);
});
