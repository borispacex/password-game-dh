import { Injectable } from '@angular/core';
import { Rule } from '../models/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  getRules(): Rule[] {
    const { day, currentMonth, previousMonth, nextMonth, year } = this.getDateValues();
    return [
      {
        id: 1,
        description: 'La contraseña debe tener al menos 5 caracteres.',
        validate: (value: string) => value.length >= 5,
        passed: false,
        active: true
      },
      {
        id: 2,
        description: 'Debe contener al menos una letra mayúscula.',
        validate: (value: string) => /[A-Z]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 3,
        description: 'Debe contener al menos una letra minúscula.',
        validate: (value: string) => /[a-z]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 4,
        description: 'Debe contener al menos un número.',
        validate: (value: string) => /[0-9]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 5,
        description: 'Debe contener al menos un carácter especial (!@#$%^&* etc).',
        validate: (value: string) => /[!@#$%^&*()_+{}\[\]:;"'|\\<>?,./`~]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 6,
        description: 'No debe contener la palabra "password".',
        validate: (value: string) => !/password/i.test(value),
        passed: false,
        active: false
      },
      {
        id: 7,
        description: 'No debe tener letras repetidas consecutivas.',
        validate: (value: string) => !/(.)\1/.test(value),
        passed: false,
        active: false
      },
      {
        id: 8,
        description: 'Debe tener al menos una vocal.',
        validate: (value: string) => /[aeiouAEIOU]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 9,
        description: 'No debe terminar en número.',
        validate: (value: string) => !/[0-9]$/.test(value),
        passed: false,
        active: false
      },
      {
        id: 10,
        description: 'No debe comenzar con un símbolo.',
        validate: (value: string) => /^[a-zA-Z0-9]/.test(value),
        passed: false,
        active: false
      },
      {
        id: 11,
        description: `Debe contener el número del día de hoy: ${day}.`,
        validate: (value: string) => value.includes(day),
        passed: false,
        active: false
      },
      {
        id: 12,
        description: `Debe contener el nombre del mes actual: ${currentMonth}.`,
        validate: (value: string) => value.toLowerCase().includes(currentMonth),
        passed: false,
        active: false
      },
      {
        id: 13,
        description: `Debe contener el año actual: ${year}.`,
        validate: (value: string) => value.includes(year),
        passed: false,
        active: false
      },
      {
        id: 14,
        description: `No debe contener el mes pasado: ${previousMonth}.`,
        validate: (value: string) => !value.toLowerCase().includes(previousMonth),
        passed: false,
        active: false
      },
      {
        id: 15,
        description: `No debe contener el mes siguiente: ${nextMonth}.`,
        validate: (value: string) => !value.toLowerCase().includes(nextMonth),
        passed: false,
        active: false
      },
      {
        id: 16,
        description: 'Debe contener al menos un emoji.',
        validate: (value: string) => this.hasEmoji(value),
        passed: false,
        active: false
      },
      {
        id: 17,
        description: 'La longitud de la contraseña debe ser un número primo.',
        validate: (value: string) => this.isPrime(value.length),
        passed: false,
        active: false
      },
      {
        id: 18,
        description: 'La contraseña debe ser un palíndromo.',
        validate: (value: string) => this.isPalindrome(value),
        passed: false,
        active: false
      },
      {
        id: 19,
        description: 'Debe contener una palabra en inglés (ej: cat, dog).',
        validate: (value: string) => this.containsEnglishWord(value),
        passed: false,
        active: false
      },
      {
        id: 20,
        description: 'No puede tener caracteres repetidos.',
        validate: (value: string) => !this.hasRepeatedChars(value),
        passed: false,
        active: false
      },
      {
        id: 21,
        description: 'Debe contener un número romano válido.',
        validate: (value: string) => this.containsRomanNumeral(value),
        passed: false,
        active: false
      },
      {
        id: 22,
        description: 'La suma de los dígitos debe ser exactamente 25.',
        validate: (value: string) => this.digitSumEquals(value, 25),
        passed: false,
        active: false
      },
      {
        id: 23,
        description: 'Debe contener tres letras consecutivas del alfabeto (ej: abc, xyz).',
        validate: (value: string) => this.hasConsecutiveAlphabet(value),
        passed: false,
        active: false
      },
      {
        id: 24,
        description: 'Debe contener exactamente 2 vocales.',
        validate: (value: string) => this.countVowels(value) === 2,
        passed: false,
        active: false
      },
      {
        id: 25,
        description: 'Debe contener al menos una palabra de 4 letras o más.',
        validate: (value: string) => this.hasLongWord(value),
        passed: false,
        active: false
      },
      {
        id: 26,
        description: 'Debe tener al menos una letra mayúscula por cada 5 caracteres.',
        validate: (value: string) => this.hasEnoughUppercasePerFiveChars(value),
        passed: false,
        active: false
      },
      {
        id: 27,
        description: 'No puede tener más de 2 caracteres especiales.',
        validate: (value: string) => !this.hasTooManySpecialChars(value),
        passed: false,
        active: false
      },
      {
        id: 28,
        description: 'Debe comenzar y terminar con el mismo carácter.',
        validate: (value: string) => this.startsAndEndsSame(value),
        passed: false,
        active: false
      },
      {
        id: 29,
        description: 'Debe contener al menos un número impar.',
        validate: (value: string) => this.hasOddNumber(value),
        passed: false,
        active: false
      },
      {
        id: 30,
        description: 'Debe tener al menos una vocal y una consonante.',
        validate: (value: string) => this.hasVowelAndConsonant(value),
        passed: false,
        active: false
      },
      {
        id: 31,
        description: 'Debe contener una bandera emoji (ej: 🇧🇴).',
        validate: (value: string) => this.hasFlagEmoji(value),
        passed: false,
        active: false
      },
      {
        id: 32,
        description: 'Las letras deben alternar entre mayúscula y minúscula.',
        validate: (value: string) => this.hasAlternatingCase(value),
        passed: false,
        active: false
      },
      {
        id: 33,
        description: 'Debe contener una operación matemática válida (ej: 3+2=5).',
        validate: (value: string) => this.hasValidMathExpression(value),
        passed: false,
        active: false
      },
      {
        id: 34,
        description: 'Debe contener el símbolo "@".',
        validate: (value: string) => this.hasAscii64(value),
        passed: false,
        active: false
      },
      {
        id: 35,
        description: 'Debe contener el nombre del día actual (ej: martes).',
        validate: (value: string) => this.hasTodayName(value),
        passed: false,
        active: false
      }
    ];
  }
  // rules 11-15
  private getDateValues() {
    const date = new Date();
    const day = date.getDate().toString();
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const monthIndex = date.getMonth();
    const currentMonth = monthNames[monthIndex];
    const previousMonth = monthNames[(monthIndex + 11) % 12];
    const nextMonth = monthNames[(monthIndex + 1) % 12];
    const year = date.getFullYear().toString();

    return { day, currentMonth, previousMonth, nextMonth, year };
  }
  // rules 16-20
  private isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  private isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  private hasEmoji(str: string): boolean {
    return /\p{Emoji}/u.test(str);
  }

  private hasRepeatedChars(str: string): boolean {
    const chars = new Set();
    for (let c of str) {
      if (chars.has(c)) return true;
      chars.add(c);
    }
    return false;
  }

  private containsEnglishWord(str: string): boolean {
    const englishWords = ['cat', 'dog', 'hello', 'world', 'sun', 'moon'];
    return englishWords.some(word => str.toLowerCase().includes(word));
  }
  // rules 21-25
  private containsRomanNumeral(str: string): boolean {
    return /\b(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})\b/i.test(str);
  }

  private digitSumEquals(str: string, target: number): boolean {
    const sum = Array.from(str)
      .filter(c => /\d/.test(c))
      .reduce((acc, val) => acc + parseInt(val, 10), 0);
    return sum === target;
  }

  private hasConsecutiveAlphabet(str: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lower = str.toLowerCase();
    for (let i = 0; i < alphabet.length - 2; i++) {
      const seq = alphabet.slice(i, i + 3);
      if (lower.includes(seq)) return true;
    }
    return false;
  }

  private countVowels(str: string): number {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
  }

  private hasLongWord(str: string): boolean {
    const words = str.match(/[a-zA-Z]{4,}/g);
    return words !== null && words.length > 0;
  }
  // rules 26-30
  private hasEnoughUppercasePerFiveChars(str: string): boolean {
    const required = Math.floor(str.length / 5);
    const count = (str.match(/[A-Z]/g) || []).length;
    return count >= required;
  }

  private hasTooManySpecialChars(str: string): boolean {
    const count = (str.match(/[^a-zA-Z0-9]/g) || []).length;
    return count > 2;
  }

  private startsAndEndsSame(str: string): boolean {
    return str.length > 1 && str[0] === str[str.length - 1];
  }

  private hasOddNumber(str: string): boolean {
    return /[13579]/.test(str);
  }

  private hasVowelAndConsonant(str: string): boolean {
    const hasVowel = /[aeiouAEIOU]/.test(str);
    const hasConsonant = /[bcdfghjklmnpqrstvwxyz]/i.test(str);
    return hasVowel && hasConsonant;
  }
  // rules 31-35
  private hasFlagEmoji(str: string): boolean {
    // Regional indicators (🇦🇷, 🇧🇴, 🇺🇸, etc.)
    return /[\uD83C][\uDDE6-\uDDFF]{2}/.test(str);
  }

  private hasAlternatingCase(str: string): boolean {
    const letters = str.replace(/[^a-zA-Z]/g, '');
    for (let i = 0; i < letters.length - 1; i++) {
      const current = letters[i];
      const next = letters[i + 1];
      if ((/[A-Z]/.test(current) && /[A-Z]/.test(next)) ||
        (/[a-z]/.test(current) && /[a-z]/.test(next))) {
        return false;
      }
    }
    return true;
  }

  private hasValidMathExpression(str: string): boolean {
    const match = str.match(/(\d+)([\+\-\*\/])(\d+)=([\d]+)/);
    if (!match) return false;
    const [, a, op, b, result] = match;
    const expr = `${a}${op}${b}`;
    try {
      return eval(expr) == parseInt(result, 10);
    } catch {
      return false;
    }
  }

  private hasAscii64(str: string): boolean {
    return str.includes('@');
  }

  private hasTodayName(str: string): boolean {
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const today = days[new Date().getDay()];
    return str.toLowerCase().includes(today);
  }

}
