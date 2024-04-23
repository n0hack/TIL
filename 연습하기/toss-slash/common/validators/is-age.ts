/**
 * 주어진 문자열이 유효한 나이인지 검사합니다.
 */
function isAge(ageInput: string): boolean {
  if (!/^\d*$/.test(ageInput)) {
    return false;
  }

  return Number(ageInput) > 0;
}
