import assert from "node:assert/strict";
import {
  calculateBmi,
  calculateDailyEnergy,
  calculateIdrs,
  calculateRestingEnergy,
  getAdultBmiCategory,
  getIdrsCategory,
  waterIntakeReferences,
} from "../src/lib/health-calculators.ts";

assert.equal(calculateBmi(70, 170), 24.2);
assert.equal(getAdultBmiCategory(18.4), "कमी वजन");
assert.equal(getAdultBmiCategory(18.5), "सामान्य श्रेणी");
assert.equal(getAdultBmiCategory(25), "जास्त वजन");
assert.equal(getAdultBmiCategory(30), "लठ्ठपणाची श्रेणी");

assert.equal(calculateRestingEnergy({ age: 30, weightKg: 70, heightCm: 170, sex: "male" }), 1618);
assert.equal(calculateRestingEnergy({ age: 30, weightKg: 70, heightCm: 170, sex: "female" }), 1452);
assert.equal(calculateDailyEnergy(1618, "sedentary"), 1942);

assert.equal(calculateIdrs({ age: 34, sex: "female", waistCm: 79, familyHistory: "none", physicalActivity: "regular-and-strenuous" }), 0);
assert.equal(calculateIdrs({ age: 50, sex: "male", waistCm: 100, familyHistory: "both-parents", physicalActivity: "none" }), 100);
assert.equal(getIdrsCategory(20), "कमी जोखीम");
assert.equal(getIdrsCategory(30), "मध्यम जोखीम");
assert.equal(getIdrsCategory(60), "उच्च जोखीम");

assert.deepEqual(waterIntakeReferences.female, {
  label: "प्रौढ महिला",
  beveragesLitres: 2.2,
  totalWaterLitres: 2.7,
});

console.log("Health calculator methodology verification passed.");
