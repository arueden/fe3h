function supports(p1, p2) {
  var people = [
    'Byleth (M)', 'Byleth (F)',
    'Edelgard', 'Hubert', 'Ferdinand', 'Linhardt', 'Caspar', 'Bernadetta', 'Dorothea', 'Petra',
    'Dimitri', 'Dedue', 'Felix', 'Ashe', 'Sylvain', 'Mercedes', 'Annette', 'Ingrid',
    'Claude', 'Lorenz', 'Raphael', 'Ignatz', 'Lysithea', 'Marianne', 'Hilda', 'Leonie',
    'Seteth', 'Flayn', 'Hanneman', 'Manuela', 'Gilbert', 'Alois', 'Catherine', 'Shamir', 'Cyril',
    'Rhea', 'Sothis',
  ];
  var levels = [
    '-',
    '--',
    'SS-',
    'ASA-',
    'ASAA-',
    'SSABB-',
    'ASABBA-',
    'SAAAAAA-',
    'SSAAAAAB-',
    'SABAAAABA-',
    'AS---------',
    'AS--------A-',
    'AS-----AA-AB-',
    'AS----A--ABAB-',
    'AS-----BA-BBAB-',
    'SS--A-----AAAAA-',
    'SA---AA---AAAABA-',
    'SA-----BB-AAAAABB-',
    'AS-------A------AA-',
    'AS--B---A-----BA--A-',
    'AS----BA--B------ABB-',
    'AS-------A-----A-ABBA-',
    'SAA--A------A-B-B-AAAA-',
    'SA--AA----A--AB---AAAAB-',
    'SA--A-A-------BBB-AAAABA-',
    'SA-----B----A-B---AAAABBB-',
    'AS-----A----B----A------AA-',
    'SA--AA----AAA-B---A-AA----A-',
    'ASAB-B--A-------A-----AA--B--',
    'SAA-A---A-----B----A------AAA-',
    'SS--------AB-B--A-----------BB-',
    'SS-----A-BB----A---------A--BAB-',
    'SA---AA---A--A---B-A--B--BA---BA-',
    'SA-A--A--B-A------A-AA---A-----AA-',
    'AS-------A---A-B--B--BA-A-A--B---A-',
    'SS----------------------------------',
    'SS-----------------------------------',
  ];
  var i1 = people.indexOf(p1);
  var i2 = people.indexOf(p2);
  if (i1 < 0 || i2 < 0) return '-';
  if (i1 < i2) {
    var t = i1;
    i1 = i2;
    i2 = t;
  }
  return levels[i1].charAt(i2);
}
