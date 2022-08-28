import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MyPropertyEnquiery extends LightningElement {
    @api objectName;
    @api propertyId;
 
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: "Feedback Submitted",
            message: "Success",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    cancelHanlder(){
        const fieldArr = this.template.querySelectorAll('lightning-input-field');
        if(fieldArr){
            fieldArr.forEach(field=>{
                field.reset();
            });
        }
    }
}
