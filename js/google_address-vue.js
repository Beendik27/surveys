
function initAutocomplete() 
{
      hl = document.querySelector('.hl-app').__vue__;
      autocomplete_fields = new Array();

      if (hl.formFields)
      formFields=hl.formFields;

      if (hl.hiddenFormFields)
      formFields=hl.hiddenFormFields;      

      if (hl.formData && hl.formData.form && hl.formData.form.fields)
	  formFields=hl.formData.form.fields;
	  
      formFields.forEach(function(field) {
      if (field.hiddenFieldQueryKey)
      {
            if (field.hiddenFieldQueryKey=='google_address'||field.hiddenFieldQueryKey=='google_address_update')
            {
				  updatefields = false;
				  if (field.hiddenFieldQueryKey=='google_address_update')
				  	updatefields=true;
                  autocomplete = document.querySelectorAll(`[name="${field.tag}"]`)[0];
                  autocomplete.classList.add('googleaddress');
                  autocomplete = new google.maps.places.Autocomplete(autocomplete);
                  autocomplete.addListener('place_changed', function(){
                        ac = this;
                        document.querySelectorAll('.googleaddress').forEach(function(me)
                        {
                          me.dispatchEvent(new Event('input'));
                          // update city, state, address fields if needed.
                          updateAddress(ac);
                        });
                  });
            }
      }
      });
      function updateAddress(autocomplete)
      {
         hl = document.querySelector('.hl-app').__vue__;
         place = autocomplete.getPlace();   
         parts = new Array();
         street_number = place.address_components.find((component) => component.types[0] === "street_number");
         street = place.address_components.find((component) => component.types[0] === "route");
         number = (street_number) ? street_number["short_name"] : '';
         parts['address'] = number + ' ' + street["long_name"];
         parts['city'] = place.address_components.find((component) => component.types[0] === "locality")["long_name"];
         parts['state'] = place.address_components.find((component) => component.types[0] === "administrative_area_level_1")["short_name"];
         parts['postal_code'] = place.address_components.find((component) => component.types[0] === "postal_code")["short_name"];
        
         
          if (updatefields)
             {
                  hl = document.querySelector('.hl-app').__vue__;
                  if (hl.formSurvey)
                  {
                  hl.formSurvey.formData.slides.forEach(function(slide){
                        slide.slideData.forEach(function(field) {
                              update_field(field, parts);
                        });
                  }); //hl.formSurvey
                  }
                  if (hl.formData)
                  {
                        // form 
                        hl.formData.form.fields.forEach(function(field) 
                        {
                               update_field(field, parts);
                        });
                  }

             }

      }

     

      function update_field(field, parts)
      {
      if (!!parts[field.tag]){
      if (field.hidden){
            field.hiddenFieldValue=parts[field.tag];
      } else {
            field_tag = document.querySelector('[name="'+field.tag+'"]');
            if (!field_tag.classList.contains('googleaddress'))
            {
                  field_tag.value=parts[field.tag];
                  field_tag.dispatchEvent(new Event('input'));                  
            }
      }
      }}
}
