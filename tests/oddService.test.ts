import { oddService } from "../src/services/oddService";
import { jest } from "@jest/globals";
import { secretService } from "../src/_secret_/secretService";
import { areaFiftyOneRepository } from "../src/repositories/areaFiftyOneRepository";
import { listOVNIS } from "../src/controllers/oddController";

describe("isReallyOdd unit test suite", () => {
  it("Should 'Im not sure...'", () => {
    const number = Math.floor(Math.random() * 100);
    jest.spyOn(secretService, "isOdd").mockReturnValue(false);
    const service = oddService.isReallyOdd(number);
    expect(service).toBe("Im not sure...");
  });

  it("Should 'maybe not, who knows?'", () => {
    const number = Math.floor(Math.random() * 100);
    jest.spyOn(secretService, "isOdd").mockReturnValue(true);
    const service = oddService.isReallyOdd(number);
    expect(service).toBe("maybe not, who knows?");
  });

  it("Should return an OVNI array", async () => {
    jest.spyOn(areaFiftyOneRepository, "listOVNIS").mockResolvedValueOnce([]);

    const result = await oddService.listOVNIS();
    expect(result).toEqual([]);
  })
});
