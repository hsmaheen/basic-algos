import { pyramid } from ".";
import {} from "ts-jest";

let consoleLogSpy: jest.SpyInstance;

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});

test("pyramid is a function", () => {
  expect(typeof pyramid).toEqual("function");
});

test("prints a pryamid for n = 2", () => {
  pyramid(2);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual(" # ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("###");
  expect(consoleLogSpy.mock.calls.length).toEqual(2);
});

test("prints a pryamid for n = 3", () => {
  pyramid(3);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("  #  ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual(" ### ");
  expect(consoleLogSpy.mock.calls[2][0]).toEqual("#####");
  expect(consoleLogSpy.mock.calls.length).toEqual(3);
});

test("prints a pryamid for n = 4", () => {
  pyramid(4);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("   #   ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("  ###  ");
  expect(consoleLogSpy.mock.calls[2][0]).toEqual(" ##### ");
  expect(consoleLogSpy.mock.calls[3][0]).toEqual("#######");
  expect(consoleLogSpy.mock.calls.length).toEqual(4);
});
