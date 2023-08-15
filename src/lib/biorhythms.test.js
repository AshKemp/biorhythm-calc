import { calculateBiorhythms } from "./biorhythms";

it("calculates the physical biorhythm", () => {
  const biorhythms = calculateBiorhythms("1993-12-23", "2023-08-14");
  expect(biorhythms.physical).toBeCloseTo(-0.9423);
});

it("calculates the emotional biorhythm", () => {
  const biorhythms = calculateBiorhythms("1993-12-23", "2023-08-14");
  expect(biorhythms.emotional).toBeCloseTo(-0.7818);
});

it("calculates the intellectual biorhythm", () => {
  const biorhythms = calculateBiorhythms("1993-12-23", "2023-08-14");
  expect(biorhythms.intellectual).toBeCloseTo(0.3717);
});
