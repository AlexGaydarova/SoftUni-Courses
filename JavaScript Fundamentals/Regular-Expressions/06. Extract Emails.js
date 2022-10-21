function extractEmails(input) {
    let text = input[0];
    const pattern = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g;
    //let match = pattern.exec(text);
    let matches = text.match(pattern);
    if(matches!=null){
        for(let m of matches){
            console.log(m.trim());
        }
    }
}

// extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
extractEmails(['Please contact us at: support@github.com.Follow also _steve@yahoo.cn and --123@gmail.com  …@mail.bg s.johnson@invalid-.. My friend emails is kiki@hotmail.co.uk.']);
