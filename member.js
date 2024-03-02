function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skillsMember.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindController: true,
    scope: {
      member: '='
    }
  };
}