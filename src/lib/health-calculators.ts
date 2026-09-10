export type BinarySex = "female" | "male";

export function calculateBmi(weightKg: number, heightCm: number) {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new RangeError("Weight and height must be positive numbers.");
  }

  const heightMetres = heightCm / 100;
  return Number((weightKg / heightMetres ** 2).toFixed(1));
}

export function getAdultBmiCategory(bmi: number) {
  if (bmi < 18.5) return "कमी वजन";
  if (bmi < 25) return "सामान्य श्रेणी";
  if (bmi < 30) return "जास्त वजन";
  return "लठ्ठपणाची श्रेणी";
}

export const activityFactors = {
  sedentary: { label: "मुख्यतः बैठी दिनचर्या", factor: 1.2 },
  light: { label: "आठवड्यात १–३ दिवस हलकी हालचाल", factor: 1.375 },
  moderate: { label: "आठवड्यात ३–५ दिवस मध्यम व्यायाम", factor: 1.55 },
  high: { label: "आठवड्यात ६–७ दिवस कठीण व्यायाम", factor: 1.725 },
} as const;

export type ActivityLevel = keyof typeof activityFactors;

export function calculateRestingEnergy({
  age,
  weightKg,
  heightCm,
  sex,
}: {
  age: number;
  weightKg: number;
  heightCm: number;
  sex: BinarySex;
}) {
  const sexConstant = sex === "male" ? 5 : -161;
  return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + sexConstant);
}

export function calculateDailyEnergy(restingEnergy: number, activityLevel: ActivityLevel) {
  return Math.round(restingEnergy * activityFactors[activityLevel].factor);
}

export type FamilyHistory = "none" | "one-parent" | "both-parents";
export type PhysicalActivity = "regular-and-strenuous" | "regular-or-strenuous" | "none";

export function calculateIdrs({
  age,
  sex,
  waistCm,
  familyHistory,
  physicalActivity,
}: {
  age: number;
  sex: BinarySex;
  waistCm: number;
  familyHistory: FamilyHistory;
  physicalActivity: PhysicalActivity;
}) {
  const ageScore = age < 35 ? 0 : age < 50 ? 20 : 30;
  const lowerWaistCutoff = sex === "male" ? 90 : 80;
  const upperWaistCutoff = sex === "male" ? 100 : 90;
  const waistScore = waistCm < lowerWaistCutoff ? 0 : waistCm < upperWaistCutoff ? 10 : 20;
  const familyScore = familyHistory === "none" ? 0 : familyHistory === "one-parent" ? 10 : 20;
  const activityScore = physicalActivity === "regular-and-strenuous" ? 0 : physicalActivity === "regular-or-strenuous" ? 20 : 30;

  return ageScore + waistScore + familyScore + activityScore;
}

export function getIdrsCategory(score: number) {
  if (score < 30) return "कमी जोखीम";
  if (score < 60) return "मध्यम जोखीम";
  return "उच्च जोखीम";
}

export const waterIntakeReferences = {
  male: { label: "प्रौढ पुरुष", beveragesLitres: 3, totalWaterLitres: 3.7 },
  female: { label: "प्रौढ महिला", beveragesLitres: 2.2, totalWaterLitres: 2.7 },
  pregnancy: { label: "गर्भावस्था", beveragesLitres: 2.3, totalWaterLitres: 3 },
  lactation: { label: "स्तनपानाचा काळ", beveragesLitres: 3.1, totalWaterLitres: 3.8 },
} as const;

export type WaterProfile = keyof typeof waterIntakeReferences;
