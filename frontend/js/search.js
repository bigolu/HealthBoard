ILLNESSES = [ "Acid Reflux", "ADHD", "Seasonal Allergies", "Alzheimers Disease",
  "Angina", "Sarcoidosis", "Back Pain", "Asthma", "Bladder Control", "Bronchitis",
  "Cancer", "Clinical Depression", "COPD", "Diabetes Type 1", "Diabetes Type 2",
  "Auto-immune Hepatitis", "Emphysema", "Epilepsy", "Erectile Dysfunction",
  "Frequent Headaches", "Frequent Heartburn", "Gastritis", "GERD", "Glaucoma",
  "Gum Problems", "Hearing Difficulty", "Heart Disease", "High Blood Pressure",
  "High Cholesterol", "Hyperthyroidism", "Insomnia", "Irratable Bowel Syndrome",
  "Migraines", "Multiple Sclerosis", "Nasal Allergies", "Obesity", "Osteoarthritis",
  "Osteoporosis", "Oxygen Users", "Parkinsons Disease", "Prostrate Problems",
  "Psoriasis", "Rheumatoid Arthritis", "Sinusitis", "Sleep Apnea", "Hair Loss",
  "Ulcer", "Wheelchair User"
];

(function($){
  $(function(){
    // load autocomplete
    ILL_MAP = {};
    ILLNESSES.forEach(function(illness){
      ILL_MAP[illness] = null;
    });
    $('input.autocomplete').autocomplete({
      data: ILL_MAP,
      limit: 50, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
        alert("DONE");
      },
      minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

    // load all illnesses
    var template = Handlebars.compile($('#all-ill-template').html());
    var context = {"illnesses": ILLNESSES};
    var html = template(context);
    $('#all-ill').html(html);
  }); // end of document ready
})(jQuery);
