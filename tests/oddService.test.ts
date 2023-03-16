import { oddService } from "../src/services/oddService";
import { jest } from "@jest/globals";

describe("isReallyOdd unit test suite", () => {
  it("Should 'Im not sure...'", () => {
    const number = Math.floor(Math.random() * 100);
    const service = oddService.isReallyOdd(number);
    expect(service).toBe("Im not sure...");
  });

  it("Should 'maybe not, who knows?'", () => {
    jest.mock("../src/_secret_/secretService", () => {
      return true;
    });
    const number = Math.floor(Math.random() * 100);
    const service = oddService.isReallyOdd(number);
    expect(service).toBe("maybe not, who knows?");
  });
});
