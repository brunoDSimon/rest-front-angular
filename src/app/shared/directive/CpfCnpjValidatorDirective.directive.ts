import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

import { CpfCnpjValidator } from '../validators/cpf-cnpj.validator.ts';

@Directive({
    selector: '[appCpfCnpjValidate][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CpfCnpjValidatorDirective,
        multi: true
    }]
})
export class CpfCnpjValidatorDirective extends CpfCnpjValidator implements Validator {}
