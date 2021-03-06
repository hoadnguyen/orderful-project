import { Document } from '../interfaces/document';

export const DELINEATED_STRING_EXAMPLE = 'ISA*00*          *00*          *12*5032337522     *01*048337914      *190225*1532*^*00501*000001367*0*P*>~GS*PO*SENDER*RECEIVER*20190325*1532*572*X*005010~ST*850*000000579~BEG*00*SA*0097129080**20190325~REF*DP*0041~REF*IA*34354104~PER*BD*LD*TE*_503 232-8844~FOB*CC~CSH*Y~ITD**2*****60*****NET 60 DAYS~DTM*001*20190404~DTM*002*20190411~DTM*010*20190325~N9*ZZ*COMMENTS~MTX**REP:BOB:573-888-8888~MTX**FAX #:573-888-8888~MTX**PROVIDE A GENERAL COMPLIANCY CERTIFICATE FOR~MTX**APPLICABLE PRODUCTS MANUFACTURED AFTER~MTX**NOVEMBER 12, 2008 INDICATING THAT THE PRODUCTS~MTX**HAVE MET ALL APPLICABLE PRODUCT SAFETY STANDARDS~MTX**AS PER U.S. CONSUMER PRODUCTS SAFETY IMPROVEMENT~MTX**ACT OF 2008. CERTIFICATES THAT ARE NOT ALREADY~MTX**ACCESSIBLE IN ELECTRONIC FORMAT ACCORDING TO~MTX**CPSC GUIDELINES SHOULD BE~MTX**EMAILED TO notarealemail@orderful.com~N1*BT*DEPT STORE, INC.*9*0079088090000~N3*P O BOX 305248~N4*NASHVILLE*TN*372305103~N1*ST*DEPT STORE*9*0079088094461~N2*CHEHALIS RSC DC - HOME/HCC~N3*224 MAURIN RD.~N4*CHEHALIS*WA*985328716~N1*BY*DEPT STORE, INC.*9*0079088090000~PO1*1*21*EA*16.5**UP*014306929699*PI*04598244*VN*US840116*VE*RUST*C3*0942/0965~PID*F*08***19" PLANTER RUST~PID*F*74***19"~PO4*1*************3~PO1*2*21*EA*16.5**UP*014306923895*PI*05185047*VN*US840688*VE*LAVA*C3*0942/0965~PID*F*08***19" PLANTER LAVA US840688~PID*F*74***19"~PO4*1*************3~PO1*3*10*EA*11**UP*014306929798*PI*14598241*VN*US839116*VE*RUST*C3*0942/0965~PID*F*08***15" PLANTER RUST~PID*F*74***15"~PO4*1*************5~PO1*4*39*EA*19.5**UP*014306923901*PI*25185041*VN*US841688*VE*LAVA*C3*0942/0965~PID*F*08***23" PLANTER LAVA US841688~PID*F*74***23"~PO4*1*************3~PO1*5*12*EA*19.5**UP*014306929705*PI*93598248*VN*US841116*VE*RUST*C3*0942/0965~PID*F*08***23" PLANTER RUST~PID*F*74***23"~PO4*1*************3~PO1*6*25*EA*11**UP*014306923833*PI*94185041*VN*US839688*VE*LAVA*C3*0942/0965~PID*F*08***15" PLANTER LAVA US839688~PID*F*74***15"~PO4*1*************5~CTT*6~SE*57*000000579~GE*1*572~IEA*1*000001467~';

export const DOC_EXAMPLE: Document = {
  ISA: {
    ISA1: '00',
    ISA2: '          ',
    ISA3: '00',
    ISA4: '          ',
    ISA5: '12',
    ISA6: '5032337522     ',
    ISA7: '01',
    ISA8: '048337914      ',
    ISA9: '190225',
    ISA10: '1532',
    ISA11: '^',
    ISA12: '00501',
    ISA13: '000001367',
    ISA14: '0',
    ISA15: 'P',
    ISA16: '>'
  },
  GS: {
    GS1: 'PO',
    GS2: 'SENDER',
    GS3: 'RECEIVER',
    GS4: '20190325',
    GS5: '1532',
    GS6: '572',
    GS7: 'X',
    GS8: '005010'
  },
  ST: {ST1: '850', ST2: '000000579'},
  BEG: {
    BEG1: '00',
    BEG2: 'SA',
    BEG3: '0097129080',
    BEG4: '',
    BEG5: '20190325'
  },
  'REF_1': {REF1: 'DP', REF2: '0041'},
  'REF_2': {REF1: 'IA', REF2: '34354104'},
  PER: {PER1: 'BD', PER2: 'LD', PER3: 'TE', PER4: '_503 232-8844'},
  FOB: {FOB1: 'CC'},
  CSH: {CSH1: 'Y'},
  ITD: {
    ITD1: '',
    ITD2: '2',
    ITD3: '',
    ITD4: '',
    ITD5: '',
    ITD6: '',
    ITD7: '60',
    ITD8: '',
    ITD9: '',
    ITD10: '',
    ITD11: '',
    ITD12: 'NET 60 DAYS'
  },
  'DTM_1': {DTM1: '001', DTM2: '20190404'},
  'DTM_2': {DTM1: '002', DTM2: '20190411'},
  'DTM_3': {DTM1: '010', DTM2: '20190325'},
  N9: {N91: 'ZZ', N92: 'COMMENTS'},
  'MTX_1': {MTX1: '', MTX2: 'REP:BOB:573-888-8888'},
  'MTX_2': {MTX1: '', MTX2: 'FAX #:573-888-8888'},
  'MTX_3': {MTX1: '', MTX2: 'PROVIDE A GENERAL COMPLIANCY CERTIFICATE FOR'},
  'MTX_4': {MTX1: '', MTX2: 'APPLICABLE PRODUCTS MANUFACTURED AFTER'},
  'MTX_5': {MTX1: '', MTX2: 'NOVEMBER 12, 2008 INDICATING THAT THE PRODUCTS'},
  'MTX_6': {
    MTX1: '',
    MTX2: 'HAVE MET ALL APPLICABLE PRODUCT SAFETY STANDARDS'
  },
  'MTX_7': {
    MTX1: '',
    MTX2: 'AS PER U.S. CONSUMER PRODUCTS SAFETY IMPROVEMENT'
  },
  'MTX_8': {MTX1: '', MTX2: 'ACT OF 2008. CERTIFICATES THAT ARE NOT ALREADY'},
  'MTX_9': {MTX1: '', MTX2: 'ACCESSIBLE IN ELECTRONIC FORMAT ACCORDING TO'},
  'MTX_10': {MTX1: '', MTX2: 'CPSC GUIDELINES SHOULD BE'},
  'MTX_11': {MTX1: '', MTX2: 'EMAILED TO notarealemail@orderful.com'},
  'N1_1': {
    N11: 'BT',
    N12: 'DEPT STORE, INC.',
    N13: '9',
    N14: '0079088090000'
  },
  'N3_1': {N31: 'P O BOX 305248'},
  'N4_1': {N41: 'NASHVILLE', N42: 'TN', N43: '372305103'},
  'N1_2': {N11: 'ST', N12: 'DEPT STORE', N13: '9', N14: '0079088094461'},
  N2: {N21: 'CHEHALIS RSC DC - HOME/HCC'},
  'N3_2': {N31: '224 MAURIN RD.'},
  'N4_2': {N41: 'CHEHALIS', N42: 'WA', N43: '985328716'},
  'N1_3': {
    N11: 'BY',
    N12: 'DEPT STORE, INC.',
    N13: '9',
    N14: '0079088090000'
  },
  'PO1_1': {
    PO11: '1',
    PO12: '21',
    PO13: 'EA',
    PO14: '16.5',
    PO15: '',
    PO16: 'UP',
    PO17: '014306929699',
    PO18: 'PI',
    PO19: '04598244',
    PO110: 'VN',
    PO111: 'US840116',
    PO112: 'VE',
    PO113: 'RUST',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_1': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '19" PLANTER RUST'
  },
  'PID_2': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '19"'},
  'PO4_1': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '3'
  },
  'PO1_2': {
    PO11: '2',
    PO12: '21',
    PO13: 'EA',
    PO14: '16.5',
    PO15: '',
    PO16: 'UP',
    PO17: '014306923895',
    PO18: 'PI',
    PO19: '05185047',
    PO110: 'VN',
    PO111: 'US840688',
    PO112: 'VE',
    PO113: 'LAVA',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_3': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '19" PLANTER LAVA US840688'
  },
  'PID_4': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '19"'},
  'PO4_2': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '3'
  },
  'PO1_3': {
    PO11: '3',
    PO12: '10',
    PO13: 'EA',
    PO14: '11',
    PO15: '',
    PO16: 'UP',
    PO17: '014306929798',
    PO18: 'PI',
    PO19: '14598241',
    PO110: 'VN',
    PO111: 'US839116',
    PO112: 'VE',
    PO113: 'RUST',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_5': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '15" PLANTER RUST'
  },
  'PID_6': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '15"'},
  'PO4_3': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '5'
  },
  'PO1_4': {
    PO11: '4',
    PO12: '39',
    PO13: 'EA',
    PO14: '19.5',
    PO15: '',
    PO16: 'UP',
    PO17: '014306923901',
    PO18: 'PI',
    PO19: '25185041',
    PO110: 'VN',
    PO111: 'US841688',
    PO112: 'VE',
    PO113: 'LAVA',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_7': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '23" PLANTER LAVA US841688'
  },
  'PID_8': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '23"'},
  'PO4_4': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '3'
  },
  'PO1_5': {
    PO11: '5',
    PO12: '12',
    PO13: 'EA',
    PO14: '19.5',
    PO15: '',
    PO16: 'UP',
    PO17: '014306929705',
    PO18: 'PI',
    PO19: '93598248',
    PO110: 'VN',
    PO111: 'US841116',
    PO112: 'VE',
    PO113: 'RUST',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_9': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '23" PLANTER RUST'
  },
  'PID_10': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '23"'},
  'PO4_5': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '3'
  },
  'PO1_6': {
    PO11: '6',
    PO12: '25',
    PO13: 'EA',
    PO14: '11',
    PO15: '',
    PO16: 'UP',
    PO17: '014306923833',
    PO18: 'PI',
    PO19: '94185041',
    PO110: 'VN',
    PO111: 'US839688',
    PO112: 'VE',
    PO113: 'LAVA',
    PO114: 'C3',
    PO115: '0942/0965'
  },
  'PID_11': {
    PID1: 'F',
    PID2: '08',
    PID3: '',
    PID4: '',
    PID5: '15" PLANTER LAVA US839688'
  },
  'PID_12': {PID1: 'F', PID2: '74', PID3: '', PID4: '', PID5: '15"'},
  'PO4_6': {
    PO41: '1',
    PO42: '',
    PO43: '',
    PO44: '',
    PO45: '',
    PO46: '',
    PO47: '',
    PO48: '',
    PO49: '',
    PO410: '',
    PO411: '',
    PO412: '',
    PO413: '',
    PO414: '5'
  },
  CTT: {CTT1: '6'},
  SE: {SE1: '57', SE2: '000000579'},
  GE: {GE1: '1', GE2: '572'},
  IEA: {IEA1: '1', IEA2: '000001467'}
};

export const JSON_EXAMPLE = '{"ISA":{"ISA1":"00","ISA2":"          ","ISA3":"00","ISA4":"          ","ISA5":"12","ISA6":"5032337522     ","ISA7":"01","ISA8":"048337914      ","ISA9":"190225","ISA10":"1532","ISA11":"^","ISA12":"00501","ISA13":"000001367","ISA14":"0","ISA15":"P","ISA16":">"},"GS":{"GS1":"PO","GS2":"SENDER","GS3":"RECEIVER","GS4":"20190325","GS5":"1532","GS6":"572","GS7":"X","GS8":"005010"},"ST":{"ST1":"850","ST2":"000000579"},"BEG":{"BEG1":"00","BEG2":"SA","BEG3":"0097129080","BEG4":"","BEG5":"20190325"},"REF_1":{"REF1":"DP","REF2":"0041"},"REF_2":{"REF1":"IA","REF2":"34354104"},"PER":{"PER1":"BD","PER2":"LD","PER3":"TE","PER4":"_503 232-8844"},"FOB":{"FOB1":"CC"},"CSH":{"CSH1":"Y"},"ITD":{"ITD1":"","ITD2":"2","ITD3":"","ITD4":"","ITD5":"","ITD6":"","ITD7":"60","ITD8":"","ITD9":"","ITD10":"","ITD11":"","ITD12":"NET 60 DAYS"},"DTM_1":{"DTM1":"001","DTM2":"20190404"},"DTM_2":{"DTM1":"002","DTM2":"20190411"},"DTM_3":{"DTM1":"010","DTM2":"20190325"},"N9":{"N91":"ZZ","N92":"COMMENTS"},"MTX_1":{"MTX1":"","MTX2":"REP:BOB:573-888-8888"},"MTX_2":{"MTX1":"","MTX2":"FAX #:573-888-8888"},"MTX_3":{"MTX1":"","MTX2":"PROVIDE A GENERAL COMPLIANCY CERTIFICATE FOR"},"MTX_4":{"MTX1":"","MTX2":"APPLICABLE PRODUCTS MANUFACTURED AFTER"},"MTX_5":{"MTX1":"","MTX2":"NOVEMBER 12, 2008 INDICATING THAT THE PRODUCTS"},"MTX_6":{"MTX1":"","MTX2":"HAVE MET ALL APPLICABLE PRODUCT SAFETY STANDARDS"},"MTX_7":{"MTX1":"","MTX2":"AS PER U.S. CONSUMER PRODUCTS SAFETY IMPROVEMENT"},"MTX_8":{"MTX1":"","MTX2":"ACT OF 2008. CERTIFICATES THAT ARE NOT ALREADY"},"MTX_9":{"MTX1":"","MTX2":"ACCESSIBLE IN ELECTRONIC FORMAT ACCORDING TO"},"MTX_10":{"MTX1":"","MTX2":"CPSC GUIDELINES SHOULD BE"},"MTX_11":{"MTX1":"","MTX2":"EMAILED TO notarealemail@orderful.com"},"N1_1":{"N11":"BT","N12":"DEPT STORE, INC.","N13":"9","N14":"0079088090000"},"N3_1":{"N31":"P O BOX 305248"},"N4_1":{"N41":"NASHVILLE","N42":"TN","N43":"372305103"},"N1_2":{"N11":"ST","N12":"DEPT STORE","N13":"9","N14":"0079088094461"},"N2":{"N21":"CHEHALIS RSC DC - HOME/HCC"},"N3_2":{"N31":"224 MAURIN RD."},"N4_2":{"N41":"CHEHALIS","N42":"WA","N43":"985328716"},"N1_3":{"N11":"BY","N12":"DEPT STORE, INC.","N13":"9","N14":"0079088090000"},"PO1_1":{"PO11":"1","PO12":"21","PO13":"EA","PO14":"16.5","PO15":"","PO16":"UP","PO17":"014306929699","PO18":"PI","PO19":"04598244","PO110":"VN","PO111":"US840116","PO112":"VE","PO113":"RUST","PO114":"C3","PO115":"0942/0965"},"PID_1":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"19\\" PLANTER RUST"},"PID_2":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"19\\""},"PO4_1":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"3"},"PO1_2":{"PO11":"2","PO12":"21","PO13":"EA","PO14":"16.5","PO15":"","PO16":"UP","PO17":"014306923895","PO18":"PI","PO19":"05185047","PO110":"VN","PO111":"US840688","PO112":"VE","PO113":"LAVA","PO114":"C3","PO115":"0942/0965"},"PID_3":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"19\\" PLANTER LAVA US840688"},"PID_4":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"19\\""},"PO4_2":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"3"},"PO1_3":{"PO11":"3","PO12":"10","PO13":"EA","PO14":"11","PO15":"","PO16":"UP","PO17":"014306929798","PO18":"PI","PO19":"14598241","PO110":"VN","PO111":"US839116","PO112":"VE","PO113":"RUST","PO114":"C3","PO115":"0942/0965"},"PID_5":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"15\\" PLANTER RUST"},"PID_6":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"15\\""},"PO4_3":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"5"},"PO1_4":{"PO11":"4","PO12":"39","PO13":"EA","PO14":"19.5","PO15":"","PO16":"UP","PO17":"014306923901","PO18":"PI","PO19":"25185041","PO110":"VN","PO111":"US841688","PO112":"VE","PO113":"LAVA","PO114":"C3","PO115":"0942/0965"},"PID_7":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"23\\" PLANTER LAVA US841688"},"PID_8":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"23\\""},"PO4_4":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"3"},"PO1_5":{"PO11":"5","PO12":"12","PO13":"EA","PO14":"19.5","PO15":"","PO16":"UP","PO17":"014306929705","PO18":"PI","PO19":"93598248","PO110":"VN","PO111":"US841116","PO112":"VE","PO113":"RUST","PO114":"C3","PO115":"0942/0965"},"PID_9":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"23\\" PLANTER RUST"},"PID_10":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"23\\""},"PO4_5":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"3"},"PO1_6":{"PO11":"6","PO12":"25","PO13":"EA","PO14":"11","PO15":"","PO16":"UP","PO17":"014306923833","PO18":"PI","PO19":"94185041","PO110":"VN","PO111":"US839688","PO112":"VE","PO113":"LAVA","PO114":"C3","PO115":"0942/0965"},"PID_11":{"PID1":"F","PID2":"08","PID3":"","PID4":"","PID5":"15\\" PLANTER LAVA US839688"},"PID_12":{"PID1":"F","PID2":"74","PID3":"","PID4":"","PID5":"15\\""},"PO4_6":{"PO41":"1","PO42":"","PO43":"","PO44":"","PO45":"","PO46":"","PO47":"","PO48":"","PO49":"","PO410":"","PO411":"","PO412":"","PO413":"","PO414":"5"},"CTT":{"CTT1":"6"},"SE":{"SE1":"57","SE2":"000000579"},"GE":{"GE1":"1","GE2":"572"},"IEA":{"IEA1":"1","IEA2":"000001467"}}';

export const XML_EXAMPLE = `<?xml version="1.0" encoding="UTF-8" ?>
<root>
<ISA>
<ISA1>00</ISA1>
<ISA2>          </ISA2>
<ISA3>00</ISA3>
<ISA4>          </ISA4>
<ISA5>12</ISA5>
<ISA6>5032337522     </ISA6>
<ISA7>01</ISA7>
<ISA8>048337914      </ISA8>
<ISA9>190225</ISA9>
<ISA10>1532</ISA10>
<ISA11>^</ISA11>
<ISA12>00501</ISA12>
<ISA13>000001367</ISA13>
<ISA14>0</ISA14>
<ISA15>P</ISA15>
<ISA16>></ISA16>
</ISA>
<GS>
<GS1>PO</GS1>
<GS2>SENDER</GS2>
<GS3>RECEIVER</GS3>
<GS4>20190325</GS4>
<GS5>1532</GS5>
<GS6>572</GS6>
<GS7>X</GS7>
<GS8>005010</GS8>
</GS>
<ST>
<ST1>850</ST1>
<ST2>000000579</ST2>
</ST>
<BEG>
<BEG1>00</BEG1>
<BEG2>SA</BEG2>
<BEG3>0097129080</BEG3>
<BEG4></BEG4>
<BEG5>20190325</BEG5>
</BEG>
<REF_1>
<REF1>DP</REF1>
<REF2>0041</REF2>
</REF_1>
<REF_2>
<REF1>IA</REF1>
<REF2>34354104</REF2>
</REF_2>
<PER>
<PER1>BD</PER1>
<PER2>LD</PER2>
<PER3>TE</PER3>
<PER4>_503 232-8844</PER4>
</PER>
<FOB>
<FOB1>CC</FOB1>
</FOB>
<CSH>
<CSH1>Y</CSH1>
</CSH>
<ITD>
<ITD1></ITD1>
<ITD2>2</ITD2>
<ITD3></ITD3>
<ITD4></ITD4>
<ITD5></ITD5>
<ITD6></ITD6>
<ITD7>60</ITD7>
<ITD8></ITD8>
<ITD9></ITD9>
<ITD10></ITD10>
<ITD11></ITD11>
<ITD12>NET 60 DAYS</ITD12>
</ITD>
<DTM_1>
<DTM1>001</DTM1>
<DTM2>20190404</DTM2>
</DTM_1>
<DTM_2>
<DTM1>002</DTM1>
<DTM2>20190411</DTM2>
</DTM_2>
<DTM_3>
<DTM1>010</DTM1>
<DTM2>20190325</DTM2>
</DTM_3>
<N9>
<N91>ZZ</N91>
<N92>COMMENTS</N92>
</N9>
<MTX_1>
<MTX1></MTX1>
<MTX2>REP:BOB:573-888-8888</MTX2>
</MTX_1>
<MTX_2>
<MTX1></MTX1>
<MTX2>FAX #:573-888-8888</MTX2>
</MTX_2>
<MTX_3>
<MTX1></MTX1>
<MTX2>PROVIDE A GENERAL COMPLIANCY CERTIFICATE FOR</MTX2>
</MTX_3>
<MTX_4>
<MTX1></MTX1>
<MTX2>APPLICABLE PRODUCTS MANUFACTURED AFTER</MTX2>
</MTX_4>
<MTX_5>
<MTX1></MTX1>
<MTX2>NOVEMBER 12, 2008 INDICATING THAT THE PRODUCTS</MTX2>
</MTX_5>
<MTX_6>
<MTX1></MTX1>
<MTX2>HAVE MET ALL APPLICABLE PRODUCT SAFETY STANDARDS</MTX2>
</MTX_6>
<MTX_7>
<MTX1></MTX1>
<MTX2>AS PER U.S. CONSUMER PRODUCTS SAFETY IMPROVEMENT</MTX2>
</MTX_7>
<MTX_8>
<MTX1></MTX1>
<MTX2>ACT OF 2008. CERTIFICATES THAT ARE NOT ALREADY</MTX2>
</MTX_8>
<MTX_9>
<MTX1></MTX1>
<MTX2>ACCESSIBLE IN ELECTRONIC FORMAT ACCORDING TO</MTX2>
</MTX_9>
<MTX_10>
<MTX1></MTX1>
<MTX2>CPSC GUIDELINES SHOULD BE</MTX2>
</MTX_10>
<MTX_11>
<MTX1></MTX1>
<MTX2>EMAILED TO notarealemail@orderful.com</MTX2>
</MTX_11>
<N1_1>
<N11>BT</N11>
<N12>DEPT STORE, INC.</N12>
<N13>9</N13>
<N14>0079088090000</N14>
</N1_1>
<N3_1>
<N31>P O BOX 305248</N31>
</N3_1>
<N4_1>
<N41>NASHVILLE</N41>
<N42>TN</N42>
<N43>372305103</N43>
</N4_1>
<N1_2>
<N11>ST</N11>
<N12>DEPT STORE</N12>
<N13>9</N13>
<N14>0079088094461</N14>
</N1_2>
<N2>
<N21>CHEHALIS RSC DC - HOME/HCC</N21>
</N2>
<N3_2>
<N31>224 MAURIN RD.</N31>
</N3_2>
<N4_2>
<N41>CHEHALIS</N41>
<N42>WA</N42>
<N43>985328716</N43>
</N4_2>
<N1_3>
<N11>BY</N11>
<N12>DEPT STORE, INC.</N12>
<N13>9</N13>
<N14>0079088090000</N14>
</N1_3>
<PO1_1>
<PO11>1</PO11>
<PO12>21</PO12>
<PO13>EA</PO13>
<PO14>16.5</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306929699</PO17>
<PO18>PI</PO18>
<PO19>04598244</PO19>
<PO110>VN</PO110>
<PO111>US840116</PO111>
<PO112>VE</PO112>
<PO113>RUST</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_1>
<PID_1>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>19" PLANTER RUST</PID5>
</PID_1>
<PID_2>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>19"</PID5>
</PID_2>
<PO4_1>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>3</PO414>
</PO4_1>
<PO1_2>
<PO11>2</PO11>
<PO12>21</PO12>
<PO13>EA</PO13>
<PO14>16.5</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306923895</PO17>
<PO18>PI</PO18>
<PO19>05185047</PO19>
<PO110>VN</PO110>
<PO111>US840688</PO111>
<PO112>VE</PO112>
<PO113>LAVA</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_2>
<PID_3>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>19" PLANTER LAVA US840688</PID5>
</PID_3>
<PID_4>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>19"</PID5>
</PID_4>
<PO4_2>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>3</PO414>
</PO4_2>
<PO1_3>
<PO11>3</PO11>
<PO12>10</PO12>
<PO13>EA</PO13>
<PO14>11</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306929798</PO17>
<PO18>PI</PO18>
<PO19>14598241</PO19>
<PO110>VN</PO110>
<PO111>US839116</PO111>
<PO112>VE</PO112>
<PO113>RUST</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_3>
<PID_5>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>15" PLANTER RUST</PID5>
</PID_5>
<PID_6>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>15"</PID5>
</PID_6>
<PO4_3>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>5</PO414>
</PO4_3>
<PO1_4>
<PO11>4</PO11>
<PO12>39</PO12>
<PO13>EA</PO13>
<PO14>19.5</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306923901</PO17>
<PO18>PI</PO18>
<PO19>25185041</PO19>
<PO110>VN</PO110>
<PO111>US841688</PO111>
<PO112>VE</PO112>
<PO113>LAVA</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_4>
<PID_7>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>23" PLANTER LAVA US841688</PID5>
</PID_7>
<PID_8>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>23"</PID5>
</PID_8>
<PO4_4>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>3</PO414>
</PO4_4>
<PO1_5>
<PO11>5</PO11>
<PO12>12</PO12>
<PO13>EA</PO13>
<PO14>19.5</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306929705</PO17>
<PO18>PI</PO18>
<PO19>93598248</PO19>
<PO110>VN</PO110>
<PO111>US841116</PO111>
<PO112>VE</PO112>
<PO113>RUST</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_5>
<PID_9>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>23" PLANTER RUST</PID5>
</PID_9>
<PID_10>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>23"</PID5>
</PID_10>
<PO4_5>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>3</PO414>
</PO4_5>
<PO1_6>
<PO11>6</PO11>
<PO12>25</PO12>
<PO13>EA</PO13>
<PO14>11</PO14>
<PO15></PO15>
<PO16>UP</PO16>
<PO17>014306923833</PO17>
<PO18>PI</PO18>
<PO19>94185041</PO19>
<PO110>VN</PO110>
<PO111>US839688</PO111>
<PO112>VE</PO112>
<PO113>LAVA</PO113>
<PO114>C3</PO114>
<PO115>0942/0965</PO115>
</PO1_6>
<PID_11>
<PID1>F</PID1>
<PID2>08</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>15" PLANTER LAVA US839688</PID5>
</PID_11>
<PID_12>
<PID1>F</PID1>
<PID2>74</PID2>
<PID3></PID3>
<PID4></PID4>
<PID5>15"</PID5>
</PID_12>
<PO4_6>
<PO41>1</PO41>
<PO42></PO42>
<PO43></PO43>
<PO44></PO44>
<PO45></PO45>
<PO46></PO46>
<PO47></PO47>
<PO48></PO48>
<PO49></PO49>
<PO410></PO410>
<PO411></PO411>
<PO412></PO412>
<PO413></PO413>
<PO414>5</PO414>
</PO4_6>
<CTT>
<CTT1>6</CTT1>
</CTT>
<SE>
<SE1>57</SE1>
<SE2>000000579</SE2>
</SE>
<GE>
<GE1>1</GE1>
<GE2>572</GE2>
</GE>
<IEA>
<IEA1>1</IEA1>
<IEA2>000001467</IEA2>
</IEA>
</root>`;
