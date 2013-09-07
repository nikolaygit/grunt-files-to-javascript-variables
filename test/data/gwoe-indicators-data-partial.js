Data.indicators = {

    structure : {
        goals : 'Ziele',
        impulsQuestions : 'Impulsfragen',
        table : 'Bewertungstabelle',
        evaluationDetails : 'Besonderheiten bei der Bewertung',
        definition : 'Definitionen und Hintergrund',
        implementationHelp : 'Umsetzunghilfen',
        moreinfo : 'Mehr Info',

        subindicator : 'Sub-Indikator',
        levels : {
            beginner: {
                title: 'Erste Schritte',
                min: '0',
                max: '10'
            },
            advanced: {
                title: 'Fortgeschritten',
                min: '11',
                max: '30'
            },
            experienced: {
                title: 'Erfahren',
                min: '31',
                max: '60'
            },
            model: {
                title: 'Vorbildlich',
                min: '61',
                max: '100'
            }
        },
        relevance : 'Relevanz',
        relevances : {
            'low': 'niedrig',
            'middle': 'mittel',
            'high': 'hoch'
        }
    },

    data : {
        indicators : [
            /* ----------------------------------- C1 ----------------------------------- */
            {
                shortcode : 'C1',
                shortcodeSlug : 'c1',
                points: 90,
                name: 'Arbeitsplatzqualität und Gleichstellung',
                goals : {},
                impulsQuestions : {},
                table : {
                    legend : [
                        {
                            short : 'AN',
                            long : 'ArbeitnehmerInnen'
                        },
                        {
                            short : 'BFG',
                            long : 'betriebliche Gesundheitsförderung'
                        },
                        {
                            short : 'BR',
                            long : 'Betriebsrat'
                        },
                        {
                            short : 'FK',
                            long : 'Führungskräfte'
                        },
                        {
                            short : 'GF',
                            long : 'Geschäftsführung'
                        },
                        {
                            short : 'MA',
                            long : 'MitarbeiterInnen'
                        }
                    ],
                    subindicators : [
                        {
                            title : 'Mitarbeiterorientierte Organisationskultur und -strukturen<sup>1</sup>',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Maßnahmen; planung weiterer Maßnahmen (ideal: Einbettung in ein Gesamtkonzept) mit konkretem Umset-zungsplan'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung der Gesamtmaßnahmen; deutliche Maßnahmen zur Anpassung von Strukturen, prozessen und Haltung der Fk'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Gesamtmaßnahmen sind etabliert und werden in Umsetzung und Wirkung evaluiert; Evaluationsergebnisse werden eingearbeitet und umgesetzt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Durch Evaluation ab-gesichertes Gesamt-konzept ist vollstän-dig umgesetzt und strukturell verankert, alle Fkleben eine MA-orientierte Organi-sationskultur'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Faire Beschäftigungs- und Entgeltpolitik',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'prekäre Beschäftigungsverhältnisse be-stehen nur bei nach-weislicher betrieblicher Notwendigkeitvorausschauende, transparente perso-nalplanung in Abstim-mung mit BR'
                                        },
                                        {
                                            levels : ['advanced', 'experienced'],
                                            description : 'Die Möglichkeit einer für den/die AN besseren Vertragsform wird geprüft (interne prüfrouti-ne) und es gibt ein umgesetztes konzept zur nachhaltig positiven Arbeitsplatzgestaltung für Arbeitskräfte in kurzzeitverträgen Gesamtkonzept zur Integration aller Beschäf-tigtengruppen im Unternehmen (z.B. gleiche Rechte auf freiwillige betriebliche Sozialleis-tungen und Förderungen, Abstimmung von Abläufen, Terminen, kommunikationswegen)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'nachhaltige Beschäfti-gungsangebote/-perspektiven für alle MA, z.B. durch über-betriebliche koopera-tionen Chancengleichheit be-züglich Möglichkeiten zur aktiven Teilhabe, Rechte auf unterneh-mensinterne Sozial-leistungen etc.'
                                        }
                                    ]
                                },
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner', 'advanced', 'experienced'],
                                            description : 'Transparentes, verbindliches Gehaltsschema, das im Unternehmen unter Einbeziehung der MitarbeiterInnen (oder deren VertreterInnen) festgelegt wird'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gehalt wird von den MA als fair empfunden und sichert ein gutes Leben'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Arbeitsschutz und Gesundheitsförderung einschließlich Work-life-Balance/flexible Arbeitszeiten',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erstellung eines Gesamtkonzepts zur BGF inkl. Umset-zungsplan. Verfügbarkeit von flexiblen Arbeitszeiten und Teilzeitmodellen zur Unterstützung einer gesunden Work-Life-Balance der MA Ergonomische Arbeits-plätze, Erfüllung des Arbeitsschutzes'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF in wesentlichen Teilen (zu mind. 50%) MA können konkrete Angebote wahrneh-menInanspruchnahme flexibler Arbeitszeiten und Teilzeitmodelle, die zur Unterstützung der Work-Life-Balance der MA beitragen kön-nen, für mind. 50 % der MA möglich'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF bis zu 75 %,und Einführung von qualitätssicherungs-maßnahmen; MA können vielfältige und innovative Angebote wahrnehmen. Flexible Arbeitszeiten und Teilzeitmodelle für alle MA möglich und strukturell unterstützt, Homeoffice wird nach Möglichkeit unterstützt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'BGF ist vollständig im Unternehmen verankert und in die Strukturen und Abläu-fe des Unternehmens integriert; Führungskräfte agie-ren als Multiplikatoren. Die unterschiedlichen Arbeitszeitangebo-te sind strukturell integriert und kulturell akzeptiert, die organi-sationsweite Nutzung (auch in hierarchisch höheren positionen, auch bei Männern) wird unterstützt'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Gleichstellung und Diversität',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erhebung qualitativer und quantitativer Informationen im Hinblick auf Diversität und Ableitung von Zielset-zungen zur Förderung von Gleichstellung und Diversität. Beschäftigungsquote<sup>2</sup>*: Gesetzliche Teilerfüllung von mind. 75 %. Aktive Berücksichtigung von Gleichstellung und Diversität bei jeder Stellenbesetzung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleich-stellung im Unterneh-men (inkl. konkretem Umsetzungsplan) ist vorhanden Gesetzliche Quote wird zu 100 % erfüllt, Keine Ausgleichszahlungen Angepasste perso-nalsuche und Stellen-besetzung (unterre-präsentierte Gruppen werden bevorzugt)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleichstellung im Unternehmen ist in wesentlichen Teilen umgesetzt. Kompetenz und Motivation von Fkhin-sichtlich Diversität und Gleichstellung wird gezielt und nachdrück-lich gefördert<sup>3</sup>*. Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt über dem Bran-chendurchschnitt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gesamtkonzept zu 100 % umgesetzt, d.h. es ist strukturell in allen Organisationsbe-reichen verankert und wird von allen Fkmit-getragen und gelebt Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt weit über der Branchendurchschnitt'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    details : {
                        content :
                            '<p>Folgende Aspekte sind (neben Mitbestimmung, die in C5 behandelt wird) für mitarbeiterorientierte Organisationskultur und -strukturen zentral:<p>'+
                            '<p><ul>' +
                                '<li>Klarheit über Aufgabe und Verantwortung (und deren Grenzen)</li>' +
                                '<li>Wertschätzungskultur, d.h. prozesse und Strukturen der betrieblichen Wertschätzung auch jenseits von Geldzahlungen</li>'+
                                '<li>Führungskultur der Klarheit und offenen Rückmeldungen, Möglichkeit zu regelmäßigen Feedback- und Entwicklungsgesprächen</li>'+
                                '<li>Unabhängige Beratungsangebote bzw. Anlaufstelle für Anliegen oder bei problemen – z.B. Supervision, Coaching, Teamentwicklung</li>'+
                                '<li>Kommunikationskultur: klare kommunikationswege, Mitarbeiterbefragungen werden regelmäßig durchgeführt und die Ergebnisse umgesetzt</li>'+
                                '<li><ul><li>Vorbildlich: jährliche Mitarbeiterbefragungen, die von Externen durchgeführt und über den Betriebsrat abgewickelt werden; die Rückmeldungen der MitarbeiterInnen münden in konkrete Maßnahmen</li></ul></li>'+
                                '<li>Umfassende, qualitativ hochwertige Aus- und Weiterbildung</li>'+
                                '<li><ul><li>Vorbildlich: Auswahl von Fortbildungen erfolgt in Absprache, die tatsächliche Nutzung ist in hohem Ausmaß in allen Organisationsbereichen gegeben</li></ul></li>'+
                            '</ul></p>'+
                            '<p>Wesentliche Aspekte für eine erfolgreiche betriebliche Gesundheitsförderung sind (wiederum neben partizipation, die in C5 behandelt wird) die folgenden<sup>4</sup>:<p>'+
                            '<p><ul>' +
                                '<li>Ganzheitlichkeit: Betriebliche Gesundheitsförderung umfasst verhaltens- und verhältnisorientierte Maßnahmen (erstere sind auf die MitarbeiterInnen, zweitere auf die Arbeitsbedingungen bezogen). Neben der Verminderung von Gesundheitsrisiken werden gleichzeitig Schutzfaktoren und Gesundheitsressourcen gesteigert. Es geht sowohl um physische als auch um psychische Gesundheit.</li>' +
                                '<li>Integration: Betriebliche Gesundheitsförderung muss bei allen bedeutenden Ent-scheidungen in allen Bereichen des Unternehmens Berücksichtigung finden.</li>' +
                                '<li>Projektmanagement: systematische Umsetzung aller Maßnahmen</li>' +
                            '</ul></p>'+
                            '<p><strong>Einschränkung für Einpersonenunternehmen</strong></p>'+
                            '<p>Für Einpersonenunternehmen gilt der Sub-Indikator Gleichstellung und Diversität nicht.</p>'+
                            '<p><strong>Abgrenzungen zu anderen Indikatoren</strong></p>'+
                            '<p>Der Indikator C1 behandelt mit Gleichstellung ein Thema, das sich als querschnittsmaterie durch sämtliche unternehmerische Aktivitäten erstreckt. Umgekehrt werden für den Indikator C1 relevante Aspekte auch in den Indikatoren C2, C3, C4 und C5 behandelt:</p>'+
                            '<p>Das gemeinsame Thema mit dem Indikator C2 ist die <em>Arbeitszeit</em>, wobei der Fokus in C2 auf der gerechten Verteilung der vorhandenen Arbeit liegt, während in C1 die Arbeitszeiten und die zur Verfügung stehenden Arbeitszeitmodelle für die bereits im Unternehmen beschäftigten Personen im Zentrum stehen.</p>'+
                            '<p>Eine Überschneidung mit dem Indikator C3 besteht im Bereich der <em>gesundheitsförderlichen Aspekte</em>, die Teil umweltbewusstseinssteigernder Maßnahmen und Handlungen (z.B. Rad fahren, verringerte Arbeitslast und mehr Zeit für Erholung, biologische Nahrungsmittel) sein können.</p>'+
                            '<p>Auch C4, die gerechte Verteilung des Einkommens, kann sich indirekt auf die Arbeitsplatzqualität auswirken. Es gibt eine Reihe von Untersuchungen<sup>5</sup>, die auf positive Effekte hinweisen, wenn die Differenz zwischen den unteren Einkommen/Vermögen und oberen Einkommen/Vermögen gering ist. Je gleicher das Einkommen/ Vermögen, desto positivere Auswirkungen hat das auf die Gesellschaft. Diese Ergebnisse können durchaus auch auf die Arbeitswelt übertragen werden.</p>'+
                            '<p></p>'+
                            '<p></p>'
                    },
                    footnotes : [
                        {
                            content: 'Konkret in den Dimensionen: Klarheit über Aufgaben und Verantwortlichkeiten (und ihre Grenzen), Wertschätzungskultur, Führungskultur, konstruktiver Umgang mit Problemen, Kommunikationskultur inkl. MA-Befragungen und Aus- und Weiterbildung.'
                        },
                        {
                            content: 'In Österreich und Deutschland gibt es Mindestquoten für die Beschäftigung von Menschen mit Behinderung. Wenn diese unterschritten werden, müssen relativ geringe Ausgleichsabgaben geleistet werden, was die Nicht-erfüllung leicht macht. Daher bewerten wir hier bei ersten Schritten schon quoten unterhalb der gesetzlichen Vorschrift positiv.'
                        },
                        {
                            content: 'Zum Beispiel in Form von umfassenden Fortbildungsmaßnahmen (Diversity-Trainings, Gleichstellungsworkshops, Gender-Trainings), die die Sensibilisierung für Diversität und den Aufbau von Gleichstellungskompetenzen zum Ergebnis haben.'
                        },
                        {
                            content: 'Siehe ENWHp(Hrsg.) (2007): Die Luxemburger Deklaration zur betrieblichen Gesundheitsförderung in der Europäischen Union. ENWHp. Verfügbar unter: <a href="http://www.netzwerkbgf.at/mediaDB/677704_Luxemburger%20Dekla-ration%20Fassung%202007%20deutsch.pdf">http://www.netzwerkbgf.at/mediaDB/677704_Luxemburger%20Dekla-ration%20Fassung%202007%20deutsch.pdf</a>'
                        },
                        {
                            content: 'Vgl. pickett, kate/Wilkinson, Richard: Gleichheit ist Glück. Warum gerechte Gesellschaften für alle besser sind, Zweitausendeins, 2010 + Websites zu dem Thema: <a href="http://www.equalitytrust.org.uk/+ http://inequalitywatch.eu/?lang=en">http://www.equalitytrust.org.uk/+ http://inequalitywatch.eu/?lang=en</a>'
                        }
                    ]
                },
                definition : {
                    content:
                    'Gleichstellung und Diversität wird in den folgenden Ausführungen nur zur Wahrung besse-rer Übersichtlichkeit in einem eigenen Abschnitt erläutert. Im Sinne der Chancengleichheit müssen jedoch alle Maßnahmen zur Wahrung und Steigerung der Arbeitsplatzqualität auch darauf hin überprüft werden, ob sie (tatsächlich) allen MitarbeiterInnen gleicherma-ßen zur Verfügung stehen.'
                },
                implementationHelp : {
                    content:
                    'Die Durchführung von MitarbeiterInnenbefragungen kann wesentliche Anhaltspunkte für die Identifikation von Handlungsfeldern liefern, insbesondere wenn die Befragung organi-sationsextern durchgeführt und intern über den Betriebsrat abgewickelt wird.'
                },
                moreinfo : {
                    content:
                    '<p><strong>allgemein</strong></p>'
                }
            },
            /* ----------------------------------- C2 ----------------------------------- */
            {
                shortcode : 'C2',
                shortcodeSlug : 'c2',
                name: 'Gerechte Verteilung der Erwerbsarbeit',
                points: 50,
                goals : {
                    content :
                    '<p>Erwerbsarbeit ist ein wertvolles Gut und ein wichtiges Element gesellschaftlicher Teilha-be. Dennoch arbeiten derzeit die einen zu viel („leben um zu arbeiten“) und andere gar nicht („arbeitslos“). Vorrangiges Ziel des Indikators ist deshalb die gerechte Verteilung des Arbeitsvolumens auf alle erwerbsfähigen Menschen. Die Unternehmen sorgen ihrerseits gemeinsam dafür, dass alle Menschen einen gerechten Anteil am Erwerbsarbeitskuchen bekommen – niemand zu wenig und niemand zu viel. Sie bauen dazu sukzessive Über-stunden ab und danach sogar „Unterstunden“ auf und nehmen damit eine weitere Verkür-zung der gesetzlichen Regelarbeitszeit vorweg.</p>'+
                    '<p>Laut Umfragen wünschen sich Menschen in ganz Europa, für die Erwerbsarbeit pro Wo-che nur 26–39 Wochenstunden aufzuwenden.1 Der britische Think Tank „nef“ (new eco-nomics foundation) geht sogar noch weiter. Er skizziert in einem paper das Bild einer 21-Stunden-Woche. Die Autoren versprechen sich von einem stückweisen Übergang hin zu dieser neuen „Norm“, eine Reihe von drängenden und zusammenhängenden prob-lemen zu lösen. Darunter: Überstunden und Arbeitslosigkeit, Massenkonsum und CO2-Emissionen, geringes Wohlbefinden und Ungleichheiten. Das bringt mehr Zeit für einen nachhaltigen Lebensstil und sozialen Austausch und bietet die Möglichkeit, an der Vielseitigkeit des Lebens teilzuhaben.2</p>',
                    footnotes : [
                        {
                            content: '<a href="http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf" target="_blank">http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf</a>'
                        },
                        {
                            content: '<a href="http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf" target="_blank">http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf</a>'
                        }
                    ]
                },
                impulsQuestions : {
                    content:
                    '<p><ul>' +
                        '<li>Wie wird Arbeitszeit bzw. arbeitsfreie Zeit im Unternehmen erfasst (im Speziellen in EpU)?</li>'+
                        '<li>Gibt es Transparenz bzgl. möglicher Arbeitszeitmodelle im Unternehmen?</li>'+
                        '<li>Welche Vorstellung haben die MitarbeiterInnen von einem sinnvollen Einsatz ihrer Arbeitszeit? Welche Arbeitszeitgestaltung wäre aus ihrer Sicht in Zukunft erstrebenswert?</li>'+
                        '<li>Gilt bei Ihnen im Unternehmen überwiegend die Formel „Arbeitszeit = Lebenszeit“?</li>'+
                        '<li>Werden Weiterbildungen zu Selbst- und Zeitmanagement angeboten?</li>'+
                        '<li>Trauen Sie Ihren MitarbeiterInnen zu, eigenverantwortlich mit Arbeitszeit umzugehen?</li>'+
                        '<li>Beschäftigen Sie ZeitarbeiterInnen? Wenn ja, mit welcher Begründung?</li>'+
                        '<li>Welchen Wert hat „nicht-entlohnte“ Arbeit für Sie?</li>'+
                    '</ul></p>'+
                    '<p><strong>Relevante Kennzahlen</strong></p>'+
                    '<p><ul>' +
                        '<li>Quote der All-Inclusive-Arbeitsverträge</li>' +
                        '<li>Geleistete Überstunden je MitarbeiterIn</li>' +
                        '<li>Zeitarbeitsquote</li>' +
                        '<li>Teilzeitquote</li>' +
                        '<li>Neueinstellungen</li>' +
                        '<li>Mitarbeiterbefragung zu Arbeitszeit und Arbeitszeitmodellen</li>' +
                    '</ul></p>'
                }
            }
        ],
        negativeCriteria : [
            {
                shortcode : 'N1',
                shortcodeSlug : 'n1',
                name: 'Verletzung der ILO-Arbeitsrechte / Normen / Menschenrechte',
                points: -200,
                content :
                    '<p>Verletzung content N1<br/>to be pasted.</p>',

                footnotes :
                    'footnotes N1 ...'
            },
            {
                shortcode : 'N2',
                shortcodeSlug : 'n2',
                name: 'Menschenunwürdige Produkte und Dienstleistungen',
                points: -200,
                content :
                    '<p>Menschenunwürdige content N2<br/>to be pasted.</p>',

                footnotes :
                    'footnotes N2...'
            }
        ]
    }

};

var indicators = Data.indicators.data.indicators;
