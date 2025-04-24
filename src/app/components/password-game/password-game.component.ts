import { Component, OnInit } from '@angular/core';
import { Rule } from 'src/app/models/rule.model';
import { RuleService } from 'src/app/services/rule.service';

@Component({
  selector: 'app-password-game',
  templateUrl: './password-game.component.html',
  styleUrls: ['./password-game.component.scss']
})
export class PasswordGameComponent implements OnInit {
  password: string = '';
  rules: Rule[] = [];
  activeRules: Rule[] = []; // Reglas que ya se cumplieron
  nextRule!: Rule | null;   // Regla que se está mostrando actualmente

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {
    // Obtener todas las reglas desde el servicio
    this.rules = this.ruleService.getRules();

    // Empezamos con la primera regla como pendiente
    this.nextRule = this.rules[0];
  }

  onPasswordInput(): void {
    // Validar reglas completadas
    this.activeRules.forEach(rule => {
      rule.passed = rule.validate(this.password);
    });

    // Validar la siguiente regla pendiente
    if (this.nextRule && this.nextRule.validate(this.password)) {
      this.nextRule.passed = true;
      this.nextRule.active = true;
      this.activeRules.push(this.nextRule);
      this.updateNextRule(); // Pasamos a la siguiente
    }
  }

  updateNextRule(): void {
    const nextIndex = this.activeRules.length;
    this.nextRule = this.rules[nextIndex] || null;
  }
}
