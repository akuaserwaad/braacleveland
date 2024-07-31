export interface MajorCredits {
  credits: number;
  _brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  _brand: 'Minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'Major' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'Minor' };
}

const cred1: MajorCredits = { credits: 5, _brand: 'Major' };
const cred2: MajorCredits = { credits: 6, _brand: 'Major' };

const totalMajorCredits = sumMajorCredits(cred1, cred2);
console.log(`Total Major Credits: ${totalMajorCredits.credits}`);

const cred3: MinorCredits = { credits: 3, _brand: 'Minor' };
const cred4: MinorCredits = { credits: 4, _brand: 'Minor' };

const totalMinorCredits = sumMinorCredits(cred3, cred4);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
