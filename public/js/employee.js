function employee(args){
    if(args != undefined){
        this.Name = args.Name;
        this.Designation = args.Designation;
        this.ProfilePicture = args.ProfilePicture;
    }
}
exports.GetMembersList=function(){
    var employees = [];
debugger;
employees.push(new employee({Name:'George', Designation:'Manager', ProfilePicture:'George.jpg'}));
employees.push(new employee({Name:'Diane', Designation:'Mkt. Associate', ProfilePicture:'Diane.jpg'}));
employees.push(new employee({Name:'Halle', Designation:'Associate', ProfilePicture:'Halle.jpg'}));
employees.push(new employee({Name:'Jennifer', Designation:'Associate', ProfilePicture:'Jennifer.jpg'}));
employees.push(new employee({Name:'Julia', Designation:'Associate', ProfilePicture:'Julia.jpg'}));
employees.push(new employee({Name:'Justin', Designation:'Associate', ProfilePicture:'Justin.jpg'}));
employees.push(new employee({Name:'Scarlett', Designation:'Associate', ProfilePicture:'Scarlett.jpg'}));
employees.push(new employee({Name:'Ted', Designation:'Associate', ProfilePicture:'Ted.jpg'}));
employees.push(new employee({Name:'Willam', Designation:'Director', ProfilePicture:'Willam.jpg'}));
return employees;
}