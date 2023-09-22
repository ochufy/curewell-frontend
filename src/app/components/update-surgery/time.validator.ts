import { AbstractControl } from "@angular/forms";

export function timeValidator(control: AbstractControl): {[key: string]: any} | null {

    const startTimeString = control.get('newStartTime')?.value;
    const endTimeString = control.get('newEndTime')?.value;

    const startTime = parseFloat(startTimeString);
    const endTime = parseFloat(endTimeString);
    
    console.log(startTime, endTime);
    
    return startTime && endTime && startTime > endTime ? {'timeInvalid': true} : null;
}