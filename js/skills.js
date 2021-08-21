var skills = ['Sword', 'Lance', 'Axe', 'Bow', 'Brawl', 'Reason', 'Faith', 'Authority', 'Heavy Armor', 'Riding', 'Flying'];

var talents = {//SLABBRFAHRF
  'Byleth':     's---s-hs---',
  'Edelgard':   's-sw-hwss--',
  'Hubert':     '-hws-sws--w',
  'Ferdinand':  'sss-----hs-',
  'Linhardt':   '--w-wss----',
  'Caspar':     '--swsw-w---',
  'Bernadetta': 'wswsw---wh-',
  'Dorothea':   's----sh--ww',
  'Petra':      's-ss-ww---s',
  'Dimitri':    'ssw--w-s-h-',
  'Dedue':      '-ss-s-w-sww',
  'Felix':      's--ssh-w---',
  'Ashe':       '-hss-w-----',
  'Sylvain':    '-ssw-h---s-',
  'Mercedes':   'wwwh-ss-w--',
  'Annette':    '--sw-s-sw--',
  'Ingrid':     'ss-------ss',
  'Claude':     'swhs--ws-ss',
  'Lorenz':     '-s--ws---s-',
  'Raphael':    '--swsw--sw-',
  'Ignatz':     's--s-h-s--w',
  'Lysithea':   'hww--sssw--',
  'Marianne':   'sh--w-s-wss',
  'Hilda':      '-ss---wwh--',
  'Leonie':     '-s-s-----s-',
  'Seteth':     'sss----s-ws',
  'Flayn':      '-s---hs-ww-',
  'Hanneman':   '---s-s--wsw',
  'Manuela':    's----ws-w-s',
  'Gilbert':    '-ss--w--s-w',
  'Alois':      '--s-sw--s--',
  'Catherine':  's---sw-----',
  'Shamir':     '-s-s--w----',
  'Cyril':      '-sss-ww--ss',
  'Jeritza':    'ss--s-ww-sh',
  'Jeralt':     '-s-----s-sw',
  'Rhea':       's-----s----',
  'Yuri':       'swwh-sss-ww',
  'Balthus':    'swswshs-s-w',
  'Constance':  's-w-hs-sw-s',
  'Hapi':       '--h-ws-wwss',
  'Anna':       's-ss-wsw-h-',
};

var classes = {       //SLABBRFAHRF
  'Beginner': {
    'Myrmidon':        'D          ',
    'Soldier':         ' D         ',
    'Fighter':         '  DDD      ',
    'Monk':            '     DD    ',
  },
  'Intermediate': {
    'Lord':            'd      C   ',
    'Mercenary':       'C          ',
    'Thief':           'C          ',
    'Cavalier':        ' C       D ',
    'Pegasus Knight':  ' C        D',
    'Brigand':         '  C        ',
    'Armored Knight':  '  C     D  ',
    'Archer':          '   C       ',
    'Brawler':         '    C      ',
    'Mage':            '     C     ',
    'Dark Mage':       '     C     ',
    'Priest':          '      C    ',
  },
  'Advanced': {
    'Swordmaster':     'A          ',
    'Hero':            'B C        ',
    'Assassin':        'B  C       ',
    'Paladin':         ' B       B ',
    'Warrior':         '  A        ',
    'Fortress Knight': '  B     B  ',
    'Wyvern Rider':    '  B       C',
    'Sniper':          '   A       ',
    'Grappler':        '    A      ',
    'Warlock':         '     A     ',
    'Dark Bishop':     '     A     ',
    'Bishop':          '      A    ',
  },
  'Special': {
    'Trickster':       'B     B    ',
    'War Monk/Cleric': '    b c    ',
    'Dark Flier':      '     b    C',
    'Valkyrie':        '     B   B ',
  },
  'Master': {
    'Falcon Knight':   'CA        b',
    'Wyvern Lord':     ' CA       A',
    'Mortal Savant':   'A    b     ',
    'Great Knight':    '  b     Ab ',
    'Bow Knight':      ' C A     A ',
    'Dark Knight':     ' C   b   A ',
    'Holy Knight':     '      b  A ',
    'War Master':      '  A A      ',
    'Gremory':         '     AA    ',
  },
};
