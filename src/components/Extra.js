function validateForm(formData){
    const formDetails = {
      containsEmptyInput:false,
      isInvalid:false
    }

    for(const inputData in formData){
      if(!formData[inputData]){
        formDetails.containsEmptyInput = true
        break
      }
    }

    formDetails.isInvalid = formDetails.containsEmptyInput || formDetails.hasInvalidDate || false

    return formDetails;
  }

export { validateForm };