Data.quickTest = {
    name : 'Schnelltest „Gemeinwohl-Ökonomie“',
    structure : {
        testTypes : [
            {
                id : 'calculateOneOfManyAnswers',
                individualAnswer : {
                    evaluationType : 'number',
                    evaluationValues : [
                        {
                            value : 0,
                            text : 'trifft nicht zu'
                        },
                        {
                            value : 1,
                            text : 'trifft in Ansätzen zu'
                        },
                        {
                            value : 2,
                            text : 'trifft mäßig zu'
                        },
                        {
                            value : 3,
                            text : 'trifft überwiegend zu'
                        },
                        {
                            value : 4,
                            text : 'trifft zu'
                        }
                    ]
                },
                participants : [
                    {
                        type : 'company',
                        name : 'Unternehmen'
                    },
                    {
                        type : 'oneperson',
                        name : 'Einzelunternehmen'
                    }
                ],
                result : {
                    operandOnIndividualResults : 'add',
                    finalCalculation : [
                        {
                            participantType : 'company',
                            multiplyBy : 1
                        },
                        {
                            participantType : 'oneperson',
                            multiplyBy : 1.33
                        }
                    ],
                    feedbacks : [
                        {
                            minValue: 0,
                            maxValue: 32,
                            content :
                                '<p>Ihr Unternehmen setzt sich mit gemeinwohlorientierten Aspekten auseinander und ist damit schon mal über dem gesetzlichen Mindeststandards.</p>'+
                                '<p>Allerdings gibt es noch ein sehr hohes Entwicklungspotiential in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Der interne Gemeinwohl-Bericht kann helfen, den Status Quo detaillierter zu ermitteln und auf Basis dessen Ziele und Maßnahmen für das nächste Jahr zu setzen.</p>'
                        },
                        {
                            minValue: 33,
                            maxValue: 62,
                            content :
                                '<p>Ihr Unternehmen hat bereits mehr als 25% der Gemeinwohl-Aspekte verwirklicht und befindet sich auf einem „guten“ Weg.</p>'+
                                '<p>Für einen besseren Überblick könnten Sie jetzt eineEinstiegsbilanz erstellen, die ein detailliertere Auseinandersetzung ermöglicht und gleichzeitig weniger Zeit benötigt als eine vollständige Gemeinwohl-Bilanz.</p>'
                        },
                        {
                            minValue: 63,
                            maxValue: 94,
                            content :
                                '<p>Ihr Unternehmen ist überaus nachhaltigkeitsorientiert und legt gesteigerten Wert auf sozial- und umweltgerechtes Wirtschaften. Ihr Unternehmen könnte voraussichtlich bereits einen Gemeinwohl-Bericht erstellen und in den vorbildlichen Bereich der Unternehmen stoßen.</p>'+
                                '<p>Ein Gemeinwohlbericht gibt eine detaillierte Aufschlüsselung ihrer Aktivitäten und hilft weitere Verbesserungen vorzunehmen. Gleichzeitig können Ihre Kunden, Lieferanten und Mitbewerber so mehr über Ihre Aktivitäten erfahren und so sich neue Geschäftsfelder erschließen.</p>'
                        },
                        {
                            minValue: 95,
                            maxValue: 126,
                            content :
                                '<p>Ihr Unternehmen ist bereits vorbildlich nach vielenKriterien der Gemeinwohlökonomie. Wahrscheinlich sind Sie schon GWÖ-Unternehmen oder  seit Jahren branchenführend in der Nachhaltigkeitsszene. Als Vorreiter und Pionier sind Sie Vorbild für ihre Mitbewerber und Inspiration für andere gemeinwohl-interessierte Unternehmer. Bitte erstellen Sie einen Gemeinwohl-Bericht und geben so ihre Erfahrung weiter!</p>'
                        }
                    ]
                }
            }
        ]
    },
    data : {
        name : 'this is data name',
        tests : [
            {
                type : 'calculateOneOfManyAnswers',
                introduction : {
                    content :
                        '<p>Die Gemeinwohl-Ökonomie ist eine politische Vision,die eine Wirtschaft für die Menschen und die Umwelt schaffen möchte. Dabei soll das wirtschaftliche Ziel nicht mehr allein die Profitmaximierung sein, sondern die Maximierung des „Gemeinwohls".</p>'+
                        '<p>Das Gemeinwohl wird auf Basis der Gemeinwohl-Matrix definiert:</p>'+
                        '<p>Wie lebe ich als Unternehmer fünf Werte (Menschenwürde, Solidarität, Ökologische Nachhaltigkeit, Soziale Gerechtigkeit und Demokratie/Transparenz) im Kontakt mit meinen Berührungsgruppen (LieferantInnen, Geldgeber, Mitarbeiter, Kunden/Mitbewerber und das gesellschaftliche Umfeld)?</p>'+
                        '<p>Konkret gibt es auf Basis der Verbindungen 17 Indikatoren, die das Gemeinwohl messen können. Wie wird z.B. die Menschenwürde innerhalb des Betriebes im Umgang mit den Mitarbeitern gelebt? Genauer haben wir das in dem Indikator C1 „Arbeitsplatzqualität“ beschrieben.</p>'+
                        '<p>Mit Hilfe eines umfassenden Gemeinwohl-Berichtes gibt ein Unternehmen detailliert Auskunft über das Gemeinwohl-Verhalten anhand dieser 17 Indikatoren. Diese Auseinandersetzung braucht Zeit und Engagement, das viele Unternehmen derzeit aufgrund wirtschaftlicher Zwänge nicht haben.</p>'+
                        '<p>Um einen „schnellen“ ersten Einblick zu bekommen, haben wir diesen Schnelltest von Thomas Haderlapp für die Matrix 4.1. modifiziert und neu gestaltet.</p>'+
                        '<p>Innerhalb von einer halben Stunde haben Sie einen Eindruck, worum es in der GWÖ geht und ein erstes sehr grobes Ergebnis, wie gemeinwohlorientiert Sie wirtschaften.</p>'+
                        '<p>Der nächste Schritt danach könnte sein, eine vereinfachte Einstiegsbilanz zu erstellen.</p>'+
                        '<p>Hinter der den Nummer für die Fragen habe ich die Indikatoren der GWÖ-Matrix angefügt, d.h. A1 = A1 Ethisches Beschaffungswesen. So können Sie bei Lust und Laune im Handbuch nähere Hintergründe erfahren.</p>'+
                        '<p>Nähere Informationen dazu erhalten Sie hier: Link GWÖ-Dokumente</p>'
                },
                questions : [
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen berücksichtigt bei allen wesentlichen zugekauften Produkten und Dienstleistungen die besten regionalen, sozialen und ökologischen Alternativen und findet innovative Lösungen zur Vermeidung kritischer Stoffe ohne höherwertige Alternative.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen kooperiert aktiv mit LieferantInnen, um soziale und ökologische Aspekte besser zu lösen. Es gibt ein nachgewiesenes Controlling, d.h. alle zugekauften P/D sind intern oder extern zertifiziert.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen zahlt faire Preise, pflegt langfristige Kooperationen mit den LieferantInnen und hat erste innovative Strukturen entwickelt.'
                    },
                    {
                        stakeholders : 'B',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen hat ausschließlich ethisch-ökologische Finanzdienstleister, d.h. Bank/ Vorsorgekasse und veranlagt/finanziert sich dort zu 100 %.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen pflegt eine wertschätzende, offeneOrganisationskultur mit klaren Aufgaben/ Kompetenzen, ausreichender Weiterbildung und einer partizipativen Führungskultur.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen bietet optimale Arbeitsplatzsicherheit für die Mitarbeiter. Es gibt eine Vielzahl von Arbeitszeit-Modellen, die von den MA selbst gewählt werden können. Die Rahmenbedingungen für eine optimale Work-Life-Balance sind vorhanden.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen kümmert sich aktiv um diverse Mitarbeiter und die Gleichbehandlung von Mann/Frau. Es gibt gleiche Bezahlung für Männer/ Frauen, die Führungskräfte auf allen Ebenen sind zu 50% Frauen, es gibt eine besondere Berücksichtigung von älteren Arbeitnehmern, Arbeitnehmern mit Migrationshintergrund, behinderten Arbeitenehmern. Wir zahlen keine Ausgleichstaxe.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '2',
                        text : 'Mein Unternehmen hat keine All-incl. Verträge und baut Überstunden ab. Statt neuer Überstunden werden neue MitarbeiterInnen eingestellt. Wir leisten einen Beitrag zur Reduktion der Arbeitslosigkeit.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '3',
                        text : 'Mein Unternehmen fördert und fordert das ökologische Verhalten der Mitarbeiter durch eine biologisch, regionale, fleischlose Ernährung, umfassende Weiterbildungsmaßnahmen und finanzielle Förderung von schadstoffarmen Verkehrsmitteln.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        text : 'Mein Unternehmen hat eine maximale Einkommensspreizung von 1:3, d.h. der bezahlte Höchstlohn entspricht max. das dreifache des bezahlten Niedrigstlohns.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        text : 'Mein Unternehmen zahlt mind. 1250 Euro monatlich netto und maximal das zehnfache davon an den Höchstverdiener.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        text : 'Mein Unternehmen hat eine hohe interne Transparenz und alle MitarbeiterInnen können konsensual die Grundsatzentscheidungen in ihrem Team mitbestimmen.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        text : 'In meinem Unternehmen werden die Führungskräfte von ihren MitarbeiterInnen eingestellt, regelmäßig evaluiert und können auch von ihnen entlassen werden.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        text : 'Unser Unternehmen gehört allen Mitarbeitern oder einer unabhängigen Stiftung. Es gibt keine „Übermacht“ einiger weniger Eigentümer mehr.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen hat ein Gesamtkonzept für Ethik im Verkauf und sorgt für Preistransparenz, faire Preise und beliefert nur ethisch einwandfreie Kunden.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen bezieht die Kunden bei der Produktentwicklung mit ein und lässt die Kunden bestmöglich mitentscheiden.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        text : 'Mein Unternehmen gibt das eigene Knowhow, Kalkulationen und Lieferquellen an gleichgesinnte Mitbewerber weiter. Gemeinsam wird an einem Produktinformationssystem gearbeitet, so dass die Kunden optimal informiert sind und Leistungen gut vergleichen können.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        text : 'Mein Unternehmen gibt Aufträge an Mitbewerber weiter, wenn sie nicht mehr selbst bedient werden können, unterstützt die Mitbewerber mit eigenen Arbeitskräften bei Engpässen und stellt gleichgesinnten Mitbewerbern auch Fremdkapital zu einem angemessenen Zinssatz zur Verfügung.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        text : 'Die Produkte/Dienstleistungen meines Unternehmens sind im Vergleich zu den Mitbewerbern ökologisch branchenführend z.B. Cradle-to-cradle. Wir sind Vorreiter bei der ökologischen Qualität der P/D',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        text : 'Mein Unternehmen fördert das ökologische Verhalten der Kunden. Preisvorteile & Anreiz-systeme; Reparatur, Wiederverwendung und gemeinschaftliche Nutzung sind wesentliche Bestandteile unseres Geschäftsmodells.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '4',
                        text : 'Mein Unternehmen setzt sich aktiv mit den Zugang von Benachteiligten (Geringverdiener, MigrantInnen, älteren Menschen, Behinderte) zu unseren Produkten/ Dienstleistungen auseinander und schafftangemessene Zugangsmöglichkeiten für die Gruppen',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '5',
                        text : 'Mein Unternehmen arbeitet mit den Mitbewerbern aktiv an höheren sozialen und ökologischen Branchenstandards und versucht hier ein positives Lobbying.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '1',
                        text : 'Mein Unternehmen stellt Produkte/Dienstleistungen her, die einen deutlich positiven Nutzen für die Gesellschaft (nicht primärdie Kunden) haben. 75% bis 100% der P/D decken Grundbedarf oder haben deutlich positive + nachgewiesen Auswirkungen und lösen wesentliche gesellschaftliche Probleme (Social Business).',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '2',
                        text : 'Mein Unternehmen gibt mehr als 2,5% des Umsatzes für zusätzliches gesellschaftliches Engagement aus. Dabei haben wir eine umfassende Strategie sowie nachhaltige Wirkungen in mehreren Feldern.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '3',
                        text : 'Mein Unternehmen kennt seinen ökologischen Fußabdruck und ist im Branchendurchschnitt vorbildlich. Unsere negativen ökologischen Auswirkungen sind sehr gering.',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '4',
                        text : 'Unsere Gewinne werden zwischen Arbeitnehmern und Kapitalgebern gerecht verteilt, dienen der Erhöhung der Eigenkapitalquoteoder fließt in sozial-ökologische Investitionen (gemeinwohl-orientierte Gewinnverwendung). Es gibt keine Ausschüttung an nicht mitarbeitende Eigentümer.',
                        excludedParticipants : ['oneperson'],
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '5',
                        text : 'Mein Unternehmen publiziert einen Gemeinwohlbericht oder einen umfassenden Nachhaltigkeitsbericht ala GRI. Darüberhinaus beziehen wir die gesellschaftlichen Berührungsgruppen bei wesentlichen Entscheidungen mit ein.'
                    }
                ]
            }
        ]
    }
};
