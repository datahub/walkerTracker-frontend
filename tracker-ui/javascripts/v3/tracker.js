var generateURLs = {
    'campaign-finance': {
        list: function(listView) {
            var specificURL, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "campaign-finance/all/?page=" +
                                    queryPage;

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL;

            specificURL = "campaign-finance/by-state/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                        "?spaceless=true";
            }
        }
    },
    'media-appearances': {
        list: function(listView) {
            var specificURL, queryOrganization, queryIssueSlug, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryOrganization = "all";
                queryIssue = null;
                queryPage = 1;
            } else {
                queryOrganization = "all";
                if (_.has(query, 'organization')) {
                    var queryOrganizationCandidate = query.organization;

                    // Can add more processing later if need be.
                    queryOrganization = queryOrganizationCandidate.toLowerCase();
                }

                queryIssueSlug = null;
                if (_.has(query, 'issue')) {
                    var issueSlugCandidate = query.issue;

                    // Can add more processing here if need be.
                    queryIssueSlug = issueSlugCandidate;
                }

                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            if ((typeof queryIssueSlug == "undefined") ||
                    (queryIssueSlug === null)) {
                listView.chaperone.view.tagArchiveQueryDict = {};

                if (queryOrganization == "all") {
                    specificURL = "media-appearances/all/?page=" +
                                    queryPage;
                } else {
                    specificURL = "media-appearances/organization/" +
                                    queryOrganization + "/?page=" + queryPage;
                }
            } else {
                specificURL = "media-appearances/tag/" + queryIssueSlug +
                                "/?page=" + queryPage;
            }

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        tagArchive: function(view) {
            var specificURL, queryPage,
                query = view.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "media-appearances/tags/by-page/?page=" + queryPage;

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL = "media-appearances/id/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "?spaceless=true";
            }
        }
    },
    'travel': {
        list: function(listView) {
            var specificURL, queryArea, queryIssueSlug, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryArea = "US";
                queryIssue = null;
                queryPage = 1;
            } else {
                queryArea = "US";
                if (_.has(query, 'area')) {
                    var queryAreaCandidate = query.area,
                        areaMatchCount = _.where(
                            listView.facetConfig.queryAreas,
                            {a: queryAreaCandidate}
                        ).length;

                    if (areaMatchCount > 0) {
                        queryArea = queryAreaCandidate;
                    }
                }

                queryIssueSlug = null;
                if (_.has(query, 'issue')) {
                    var issueSlugCandidate = query.issue;

                    // Can add more processing here if need be.
                    queryIssueSlug = issueSlugCandidate;
                }

                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            if ((typeof queryIssueSlug == "undefined") ||
                    (queryIssueSlug === null)) {
                listView.chaperone.view.tagArchiveQueryDict = {};

                if (queryArea == "US") {
                    specificURL = "events/all/?page=" +
                                    queryPage;
                } else {
                    specificURL = "events/state/" + queryArea +
                                    "/?page=" + queryPage;
                }
            } else {
                specificURL = "events/tag/" + queryIssueSlug +
                                "/?page=" + queryPage;
            }

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        tagArchive: function(view) {
            var specificURL, queryPage,
                query = view.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "events/tags/by-page/?page=" + queryPage;

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL = "events/id/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "?spaceless=true";
            }
        }
    }
};


facetConfigs = {
    'media-appearances': {
        baseURL: "http://aukofer.dhb.io/api/v3/",
        templateIDs: {
            "listHeader": "appearance-list-header",
            "listItem": "appearance-list-item",
            "adLI": "appearance-ad-item",
            "bonusLI": "appearance-bonus-item",
            "detail": "appearance-detail",
            "visualization": "appearance-visualization",
            "placeholderLI": "appearance-placeholder-item",
            "tagArchiveHeader": "appearance-tag-archive-header",
            "tagArchiveItem": "appearance-tag-archive-item",
            "pagination": "appearance-pagination-template"
        },
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'organization')) {
                // var organizationCandidate = facetsCandidate.organization
                //                                     .toLowerCase();

                // var stateAbbreviations = _.pluck(
                //     view.facetConfig.queryAreas,
                //     'a'
                // );

                // if (_.contains(
                //             stateAbbreviations,
                //             organizationCandidate
                //         )) {
                //     if (organizationCandidate != "all") {
                //         facetsFinalized['organization'] = organizationCandidate;
                //     }
                // }

                facetsFinalized['organization'] = facetsCandidate.organization
                                                                .toLowerCase();
            }

            if (_.has(facetsCandidate, 'issue')) {
                facetsFinalized['issue'] = facetsCandidate.issue;
            }

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        parseTagArchiveFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.appearances;

            view.organizationList = dataObject.mediaOrganizations;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            return row;
        },
        listHasRightNav: true,
        renderRightNav: function(view) {
            var activeArea,
                rightNavElements = [],
                filterByOrganization = {
                    title: "Filter by organization",
                    items: [],
                    order: 1
                };

            rightNavElements.push({
                title: "Filter by issue",
                items: [
                    {
                        anchorClass: "tags-trigger",
                        anchorLink: "#!/" + view.facetSlug + "/tags/",
                        spanClass: "ss-icon ss-tag",
                        value: "Issues &raquo;"
                    }
                ],
                order: 0
            });

            if (_.has(view.queryDict, 'organization')) {
                activeOrganization = view.queryDict.organization;
            } else {
                activeOrganization = "all";
            }

            _.each(view.organizationList, function(organization) {
                var anchorClass = "organization-trigger",
                    queryDict = _.clone(view.queryDict);

                queryDict.organization = organization.a;

                delete queryDict.page;

                var facetFormatted = view.facetConfig
                                            .reassembleFacets(
                                                queryDict
                                            ),
                    anchorLink;

                if (organization.a == "US") {
                    anchorLink = "#!/" + view.facetSlug + "/";
                } else {
                    anchorLink = "#!/" + view.facetSlug +
                                 "/refine/" + facetFormatted + "/";
                }

                if (activeOrganization == organization.a) {
                    anchorClass += " active";
                }

                filterByOrganization.items.push({
                    anchorClass: anchorClass,
                    anchorLink: anchorLink,
                    spanClass: "",
                    value: organization.fn
                });
            });

            rightNavElements.push(filterByOrganization);

            view.chaperone.view.rightMenu.setListElements(
                rightNavElements
            );
        },
        enhanceHeader: function(view) {
            var headerText = "everywhere";

            if (_.has(view.queryDict, 'organization')) {
                var matchingState;

                if (view.queryDict.organization != "all") {
                    matchingOrganization = _.findWhere(
                        view.organizationList,
                        {
                            a: view.queryDict.organization
                        }
                    ).fn;

                    headerText = "in " + matchingOrganization;
                }
            } else if (_.has(view.queryDict, 'issue')) {
                return 'mentioning "' + view.verboseTagName + '"';
            }

            return " " + headerText;
        },
        enhanceTagArchiveHeader: function(view) {
            var headerText = "Issues discussed";

            return headerText;
        },
        // callbacks: {},
        listHolderID: "appearances",
        listHeaderBase: "Media appearances",
        listClass: "appearance-list",
        tagArchiveHeaderPlaceholder: "Issues discussed",
        tagArchiveClass: "appearance-tags",
        itemClasses: {
            detail: "appearance",
            advertisement: "ad",
            tagArchiveItem: "tag",
            tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.appearance;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                itemClass = "organization-list";
            } else if (isOrganizationView) {
                itemClass = "show-list";
            } else if (isTagView) {
                itemClass = "tag-list";
            }

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";
            } else if (isOrganizationView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/refine/" +
                    view.chaperone.facetConfig.reassembleFacets(
                        view.pagelessQueryDict
                    ) +
                    "/in-depth/";
            } else if (isTagView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/tags/";
            }

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                ),
                contextObj = {};

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                contextObj.itemToOpen = "show-by-show list";
            } else if (isOrganizationView) {
                contextObj.itemToOpen = "show-by-show list";
            } else if (isTagView) {
                contextObj.itemToOpen = "list of all issues";
            }

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL,
                viewType = "all",
                query = view.chaperone.view.listQueryDict,
                organizationMatches;

            if (_.has(query, 'organization')) {
                var organizationCandidate = query.organization.toLowerCase();

                // Here's where we'd verify organization slugs if we
                // chose to.
                viewType = organizationCandidate;
            }

            if (debug) {
                statsURL = view.facetConfig.baseURL +
                                "media-appearances/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/";
            } else {
                statsURL = view.facetConfig.baseURL +
                                "media-appearances/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/" +
                                "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentView",
            "frequencyCounts": "appearanceCounts"
        },
        generateVisualizationContext: function(view) {
            return {
                viewType: view.currentMode,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            // var tierMaxes = [0, 5, 10];

            // if (view.currentMode == "US") {
            //     _.each(view.frequencyCounts, function(location) {
            //         view.facetConfig.classifyState(
            //             view.$el.find(".stately"),
            //             location.stateAbbrev,
            //             tierMaxes,
            //             location.frequency
            //         );
            //     });
            // }

            // resizeChoropleth();
        },
        detailPostRenderHooks: function(view) {}
    },
    'campaign-finance': {
        // parseTagArchiveFacets: function(view, facetsCandidate) {},
        // enhanceTagArchiveHeader: function(view) {},
        // tagArchiveHeaderPlaceholder: "",
        // tagArchiveClass: "",
        // renderRightNav: function(listView) {},
        // generateListRightNav: function(view) {},
        baseURL: "http://aukofer.dhb.io/api/v3/",
        templateIDs: {
            "listHeader": "finance-list-header",
            "listItem": "finance-list-item",
            "adLI": "finance-ad-item",
            "bonusLI": "finance-bonus-item",
            "detail": "finance-detail",
            "visualization": "finance-visualization",
            "placeholderLI": "finance-placeholder-item",
            "pagination": "finance-pagination-template"
            // "tagArchiveHeader": "event-tag-archive-header",
            // "tagArchiveItem": "event-tag-archive-item"
        },
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.aggregates;

            view.dataStartDate = dataObject.startDate;
            view.dataEndDate = dataObject.endDate;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            row.dataStartDate = view.dataStartDate;
            row.dataEndDate = view.dataEndDate;

            return row;
        },
        listHasRightNav: false,
        enhanceHeader: function(view) {
            return "";
        },
        callbacks: {
            list: "loadStateDonationTotals",
            detail: "loadStateSummary"
        },
        listHolderID: "finances",
        listHeaderBase: "Donations to Walker&rsquo;s state committee",
        listClass: "donation-list",
        itemClasses: {
            detail: "donation",
            advertisement: "ad",
            // tagArchiveItem: "tag",
            // tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.stateData;
            context.dataStartDate = data.startDate;
            context.dataEndDate = data.endDate;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass = "map";

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var contextObj = {};

            contextObj.itemToOpen = "state-by-state map";

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL = view.facetConfig.baseURL + "campaign-finance/" +
                                "visualizations/us/";

            if (!debug) {
                statsURL = statsURL + "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentArea",
            "frequencyCounts": "locationCounts"
        },
        generateVisualizationContext: function(view) {
            var jenksCount = 5,
                legendFormatted,
                maxes = jenks(
                    _.pluck(view.frequencyCounts, 'total'),
                    jenksCount
                ).splice(1, (jenksCount - 1));

            legendFormatted = {
                one: formatCurrency(0, 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[0], 0),
                two: formatCurrency(maxes[0], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[1], 0),
                three: formatCurrency(maxes[1], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[2], 0),
                four: formatCurrency(maxes[2], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[3], 0),
                five: "&gt;&nbsp;" + formatCurrency(maxes[2], 0)
            };

            view.tierMaxes = maxes;

            return {
                viewMode: view.currentMode,
                legend: legendFormatted,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            if (view.currentMode == "US") {
                _.each(view.frequencyCounts, function(location) {
                    view.facetConfig.classifyState(
                        view.$el.find(".stately"),
                        location.statePostal,
                        view.tierMaxes,
                        location.total
                    );
                });
            }

            resizeChoropleth();
        },
        classifyState: function(element, areaAbbrev, tierMaxes, sortAttr) {
            if (sortAttr > tierMaxes[3]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-five");
                eee = element;
            } else if (sortAttr > tierMaxes[2]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-four");
            } else if (sortAttr > tierMaxes[1]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-three");
            } else if (sortAttr > tierMaxes[0]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-two");
            } else {
                element.find("." + areaAbbrev)
                            .addClass("tier-one");
            }
        },
        detailPostRenderHooks: function(view) {
            if (typeof view.rowContext != "undefined") {
                $.ajax({
                    url: view.rowContext.rowData.queryURL,
                    dataType: "jsonp",
                    // jsonpCallback: "loadStats",
                    type: "GET",
                    jsonp: "callback",
                    contentType: "application/json",
                    success: function(data) {
                        var tableBody = view.$el.find(
                            "#largest-donations tbody"
                        );

                        _.each(data.results.slice(0,10), function(row) {
                            var nextRowHTML = _.template(
                                $("#finance-donor-table-row").html(),
                                row
                            );
                            tableBody.append(nextRowHTML);
                        });

                        view.$el.find(".obbes-lower-link a").html(
                            "Explore all donations from " +
                            view.rowContext.rowData.stateNameFull +
                            "&nbsp;&raquo;"
                        );
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // TODO: Capture error and send to Sentry.
                    }
                });
            }
        }
    },
    'travel': {
        baseURL: "http://aukofer.dhb.io/api/v3/",
        queryAreas: [{a:"US",fn:"Entire U.S."},{a:"AL",fn:"Alabama"},{a:"AK",fn:"Alaska"},{a:"AZ",fn:"Arizona"},{a:"AR",fn:"Arkansas"},{a:"CA",fn:"California"},{a:"CO",fn:"Colorado"},{a:"CT",fn:"Connecticut"},{a:"DE",fn:"Delaware"},{a:"DC",fn:"D.C."},{a:"FL",fn:"Florida"},{a:"GA",fn:"Georgia"},{a:"HI",fn:"Hawaii"},{a:"ID",fn:"Idaho"},{a:"IL",fn:"Illinois"},{a:"IN",fn:"Indiana"},{a:"IA",fn:"Iowa"},{a:"KS",fn:"Kansas"},{a:"KY",fn:"Kentucky"},{a:"LA",fn:"Louisiana"},{a:"ME",fn:"Maine"},{a:"MD",fn:"Maryland"},{a:"MA",fn:"Massachusetts"},{a:"MI",fn:"Michigan"},{a:"MN",fn:"Minnesota"},{a:"MS",fn:"Mississippi"},{a:"MO",fn:"Missouri"},{a:"MT",fn:"Montana"},{a:"NE",fn:"Nebraska"},{a:"NV",fn:"Nevada"},{a:"NH",fn:"New Hampshire"},{a:"NJ",fn:"New Jersey"},{a:"NM",fn:"New Mexico"},{a:"NY",fn:"New York"},{a:"NC",fn:"North Carolina"},{a:"ND",fn:"North Dakota"},{a:"OH",fn:"Ohio"},{a:"OK",fn:"Oklahoma"},{a:"OR",fn:"Oregon"},{a:"PA",fn:"Pennsylvania"},{a:"RI",fn:"Rhode Island"},{a:"SC",fn:"South Carolina"},{a:"SD",fn:"South Dakota"},{a:"TN",fn:"Tennessee"},{a:"TX",fn:"Texas"},{a:"UT",fn:"Utah"},{a:"VT",fn:"Vermont"},{a:"VA",fn:"Virginia"},{a:"WA",fn:"Washington"},{a:"WV",fn:"West Virginia"},{a:"WY",fn:"Wyoming"}],
        templateIDs: {
            "listHeader": "event-list-header",
            "listItem": "event-list-item",
            "adLI": "event-ad-item",
            "bonusLI": "event-bonus-item",
            "detail": "event-detail",
            "visualization": "event-visualization",
            "placeholderLI": "event-placeholder-item",
            "tagArchiveHeader": "event-tag-archive-header",
            "tagArchiveItem": "event-tag-archive-item",
            "pagination": "event-pagination-template"
        },
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'area')) {
                var areaCandidate = facetsCandidate.area
                                                    .toUpperCase();

                var stateAbbreviations = _.pluck(
                    view.facetConfig.queryAreas,
                    'a'
                );

                if (_.contains(
                            stateAbbreviations,
                            areaCandidate
                        )) {
                    if (areaCandidate != "US") {
                        facetsFinalized['area'] = areaCandidate;
                    }
                }
            }

            if (_.has(facetsCandidate, 'issue')) {
                facetsFinalized['issue'] = facetsCandidate.issue;
            }

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        parseTagArchiveFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.events;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            return row;
        },
        listHasRightNav: true,
        renderRightNav: function(view) {
            var activeArea,
                rightNavElements = [],
                filterByArea = {
                    title: "Filter by area",
                    items: [],
                    order: 1
                };

            rightNavElements.push({
                title: "Filter by issue",
                items: [
                    {
                        anchorClass: "tags-trigger",
                        anchorLink: "#!/" + view.facetSlug + "/tags/",
                        spanClass: "ss-icon ss-tag",
                        value: "Issues &raquo;"
                    }
                ],
                order: 0
            });

            if (_.has(view.queryDict, 'area')) {
                activeArea = view.queryDict.area;
            } else {
                activeArea = "US";
            }

            _.each(view.facetConfig.queryAreas, function(area) {
                var anchorClass = "area-trigger",
                    queryDict = _.clone(view.queryDict);

                queryDict.area = area.a;

                delete queryDict.page;

                var facetFormatted = view.facetConfig
                                            .reassembleFacets(
                                                queryDict
                                            ),
                    anchorLink;

                if (area.a == "US") {
                    anchorLink = "#!/" + view.facetSlug + "/";
                } else {
                    anchorLink = "#!/" + view.facetSlug +
                                 "/refine/" + facetFormatted + "/";
                }

                if (activeArea == area.a) {
                    anchorClass += " active";
                }

                filterByArea.items.push({
                    anchorClass: anchorClass,
                    anchorLink: anchorLink,
                    spanClass: "stateface stateface-" +
                                    area.a.toLowerCase(),
                    value: area.fn
                });
            });

            rightNavElements.push(filterByArea);

            view.chaperone.view.rightMenu.setListElements(
                rightNavElements
            );
        },
        enhanceHeader: function(view) {
            var headerText = "nationwide";

            if (_.has(view.queryDict, 'area')) {
                var matchingState;

                if (view.queryDict.area == "DC") {
                    matchingState = "Washington, D.C.";
                } else {
                    matchingState = _.findWhere(
                        view.facetConfig.queryAreas,
                        {
                            a: view.queryDict.area
                        }
                    ).fn;
                }

                headerText = "in " + matchingState;
            } else if (_.has(view.queryDict, 'issue')) {
                return 'mentioning "' + view.verboseTagName + '"';
            }

            return " " + headerText;
        },
        enhanceTagArchiveHeader: function(view) {
            var headerText = "Issues discussed";

            return headerText;
        },
        // callbacks: {},
        listHolderID: "events",
        listHeaderBase: "Visits",
        listClass: "visit-list",
        tagArchiveHeaderPlaceholder: "Issues discussed",
        tagArchiveClass: "visit-tags",
        itemClasses: {
            detail: "visit",
            advertisement: "ad",
            tagArchiveItem: "tag",
            tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.event;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                itemClass = "map";
            } else if (isStateView) {
                itemClass = "state-list";
            } else if (isTagView) {
                itemClass = "tag-list";
            }

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";
            } else if (isStateView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/refine/" +
                    view.chaperone.facetConfig.reassembleFacets(
                        view.pagelessQueryDict
                    ) +
                    "/in-depth/";
            } else if (isTagView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/tags/";
            }

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                ),
                contextObj = {};

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                contextObj.itemToOpen = "state-by-state map";
            } else if (isStateView) {
                contextObj.itemToOpen = "city-by-city list";
            } else if (isTagView) {
                contextObj.itemToOpen = "list of all issues";
            }

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL, templateID,
                viewType = "US",
                query = view.chaperone.view.listQueryDict,
                areaMatches;

            if (_.has(query, 'area')) {
                var queryAreaCandidate = query.area.toUpperCase();

                areaMatches = _.where(
                            view.facetConfig.queryAreas,
                            {a: queryAreaCandidate}
                        );

                if (areaMatches.length > 0) {
                    viewType = areaMatches[0].a;
                }
            }

            if (debug) {
                statsURL = view.facetConfig.baseURL +
                                "events/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/";
            } else {
                statsURL = view.facetConfig.baseURL +
                                "events/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/" +
                                "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentArea",
            "frequencyCounts": "locationCounts"
        },
        generateVisualizationContext: function(view) {
            return {
                viewMode: view.currentMode,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            var tierMaxes = [0, 5, 10];

            if (view.currentMode == "US") {
                _.each(view.frequencyCounts, function(location) {
                    view.facetConfig.classifyState(
                        view.$el.find(".stately"),
                        location.stateAbbrev,
                        tierMaxes,
                        location.frequency
                    );
                });
            }

            resizeChoropleth();
        },
        detailPostRenderHooks: function(view) {},
        classifyState: function(element, areaAbbrev, tierMaxes, frequency) {
            if (frequency > tierMaxes[2]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-four");
            } else if (frequency > tierMaxes[1]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-three");
            } else if (frequency > tierMaxes[0]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-two");
            } else {
                // element.find("." + areaAbbrev)
                //             .addClass("tier-one");
            }
        }
    }
};


var AppView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        self.currentViewLevel = -1;
        self.listQueryDict = {};
        self.tagArchiveQueryDict = {};

        if (typeof config != "undefined") {
            if (typeof config.currentViewLevel != "undefined") {
                self.currentViewLevel = config.currentViewLevel;
            }
        }

        self.navView = new NavView({
            chaperone: self
        });

        self.rightMenu = new OffCanvasMenuView({
            chaperone: self,
            side: "right"
        });

        self.contentViews = {
            0: {
                view: null,
                topClass: "homepage"
            },
            1: {
                view: null,
                topClass: "list-view"
            },
            2: {
                view: null,
                topClass: "detail-view"
            }
        };
    },

    setViewLevel: function(newLevel) {
        var self = this;

        self.currentViewLevel = newLevel;

        return self;
    },

    switchViewLevel: function(levelNumber) {
        var self = this,
            oldLevel = self.contentViews[self.currentViewLevel],
            newLevel = self.contentViews[levelNumber],
            oldClass = oldLevel.topClass + "-shown",
            newClass = newLevel.topClass + "-shown";

        $(".inner-wrap").removeClass(oldClass).addClass(newClass);

        newLevel.view.transitionAnimations(oldLevel);

        self.currentViewLevel = levelNumber;

        return self;
    },

    attachView: function(view, position) {
        var self = this;

        self.contentViews[position].view = view;

        return self;
    },

    removeView: function(position) {
        // NOTE: To prevent animation jitters (or more
        // serious issues), only call this after a view is
        // completely off-screen! (Hint: You can achieve
        // this with a setTimeout() function.)
        var self = this,
            viewToDelete = self.contentViews[position].view;

        // console.log("Removed " + position);

        // Remove all DOM objects, events and data related
        // to the view.
        deleteView(viewToDelete);

        // Then set contentViews[viewLevel].view to null.
        self.contentViews[position].view = null;

        return self;
    },

    render: function() {
        var self = this,
            viewSections = [],
            navView = self.navView;

        _.each(self.contentViews, function(v, k) {
            viewSections.push(v.topClass);
        });

        var htmlContents = _.template(
            $("#wrapper-template").html(),
            {
                activeSection: self.contentViews[
                        self.currentViewLevel
                    ].topClass,
                // navbarHTML:
                sections: viewSections
            }
        );

        self.$el.html(htmlContents);

        navView.setElement($(".tab-bar")).render();

        self.rightMenu.setElement($(".right-off-canvas-menu"));

        _.each(self.contentViews, function(v, k) {
            if (typeof v.view != "undefined" && v.view !== null) {
                self.renderSection(v, null, null);
            }
        });

        reframeWindow();

        return self;
    },

    renderSection: function(section, previousView, newViewLevel) {
        var self = this;

        section.view.setElement($("." + section.topClass));

        section.view.render(previousView);

        section.view.bindEvents();

        if (typeof previousView != "undefined") {
            if (previousView === null) {
                section.view.transitionAnimations(null);
            }
        }

        if (newViewLevel !== null) {
            self.switchViewLevel(newViewLevel);
        }

        return self;
    }
});


var NavView = Backbone.View.extend({
    initialize: function() {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    generateAppTitle: function() {
        return "JS WalkerTracker";
    },

    render: function() {
        var self = this;

        var htmlContents =  _.template(
            $("#nav-template").html(),
            {
                appTitle: self.generateAppTitle()
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var OffCanvasMenuView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.side != "undefined") {
                self.side = config.side;
            }
        }
    },

    setListElements: function(elementDict) {
        var self = this;

        self.elementViews = [];

        _.each(elementDict, function(elementCategory) {
            var titleLabelView = new OCLabelItemView({
                chaperone: self,
                value: elementCategory.title
            });

            self.elementViews.push(titleLabelView);

            _.each(elementCategory.items, function(item) {
                var itemView = new OCMenuItemView({
                    chaperone: self,
                    valueDict: item
                });

                self.elementViews.push(itemView);
            });
        });

        return self;
    },

    render: function() {
        var self = this;

        var htmlContents = _.template(
            $("#off-canvas-menu-base").html(),
            {}
        );

        self.$el.html(htmlContents);

        var navList = self.$el.find(".off-canvas-list");

        _.each(self.elementViews, function(view) {
            var htmlItem = $('<li></li>');
            navList.append(htmlItem);

            view.setElement(htmlItem);
            view.render();
            view.bindEvents();
        });

        self.$el.find('.menu-trigger').on('click', function() {
            $('.off-canvas-wrap').removeClass('move-left');
        });

        return self;
    }
});


var OCLabelItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.value != "undefined") {
                self.value = config.value;
            }
        }
    },

    render: function() {
        var self = this;

        var htmlContents =  _.template(
            $("#off-canvas-label-item-template").html(),
            {
                value: self.value
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var OCMenuItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.valueDict != "undefined") {
                self.valueDict = config.valueDict;
            }
        }
    },

    render: function() {
        var self = this;

        var htmlContents = _.template(
            $("#off-canvas-menu-item-template").html(),
            {
                anchorClass: self.valueDict.anchorClass,
                anchorLink: self.valueDict.anchorLink,
                spanClass: self.valueDict.spanClass,
                value: self.valueDict.value
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var HomepageView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }

        self.chaperone.view.listQueryDict = {};
        self.chaperone.view.tagArchiveQueryDict = {};
    },

    render: function(previousView) {
        var self = this,
            headlineListURL = "http://aukofer.dhb.io/api/v3/" +
                                "latest-articles-feed/";

        if (!debug) {
            headlineListURL += "?spaceless=true";
        }

        $.ajax({
            url: headlineListURL,
            dataType: "jsonp",
            type: "GET",
            jsonp: "callback",
            contentType: "application/json",
            success: function(data) {
                if (data.status[0] == "2") {
                    dd = data.articles;

                    var htmlContents =  _.template(
                        $("#homepage-template").html(),
                        {
                            articles: data.articles
                        }
                    );

                    self.$el.html(htmlContents);

                    self.bindEvents();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // TODO: Capture error and send to Sentry.
            }
        });
    },

    bindEvents: function() {
        var self = this;

        var triggers = self.$el.find(
            ".homepage-contents .section-triggers .trigger"
        );

        triggers.unbind();

        triggers.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        triggers.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        triggers.on('click', function(event) {
            event.stopPropagation();

            var facetSlug = $(this).attr('facet-slug');

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            self.chaperone.navigate("!/" + facetSlug + "/", true);

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.fadeOut(450);
            } else {
                leftNav.hide();
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            var previousFacet = previousView.view.facetSlug;

            self.$el.find(".section-triggers .trigger")
                    .removeClass("chosen");
            self.$el.find(".section-triggers .trigger[facet-slug='" +
                                    previousFacet +
                            "']").addClass("chosen");

            setTimeout(function() {
                $(".section-triggers > .chosen").removeClass("chosen");
            }, 300);
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var ListView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;

                self.setQueryDict({});
            } else {
                self.setQueryDict({});
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.queryDict != "undefined") {
                self.setQueryDict(config.queryDict);
            }

            if (typeof config.initialFacets != "undefined") {
                var facetList = config.initialFacets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseListViewFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.listHeaderView = new ListHeaderView({
            chaperone: self
        });

        self.paginationView = new PaginationView({
            chaperone: self
        });
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.listQueryDict = qd;

        return self;
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug].list(self);

        return self;
    },

    fetchItems: function(callbackFunction) {
        var self = this,
            ajaxConfig = {
                url: self.queryURL,
                dataType: "jsonp",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            };

        if (_.has(self.facetConfig, "callbacks")) {
            if (_.has(self.facetConfig.callbacks, "list")) {
                ajaxConfig.jsonpCallback = self.facetConfig.callbacks.list;
            }
        }

        $.ajax(ajaxConfig);
    },

    populateListItems: function() {
        var self = this,
            adView,
            dataLength = self.collectionData.length;

        self.listItemViews = [];

        if (dataLength > 0) {
            _.each(self.collectionData, function(row) {
                var context = self.facetConfig.generateListItemContext(
                        self,
                        row
                    ),
                    listItem = new ListItemView({
                    chaperone: self,
                    data: context
                });

                self.listItemViews.push(listItem);
            });

            var bonusView = new ListBonusView({
                chaperone: self
            });

            if (dataLength >= 3) {
                adView = new AdView({
                    chaperone: self
                });
            }

            if (dataLength >= 8) {
                // Add visualization at position 4.
                self.listItemViews.splice(3, 0, bonusView);

                // Add ad at position 8.
                self.listItemViews.splice(7, 0, adView);
            } else if (dataLength >= 6) {
                // Add visualization at position 3.
                self.listItemViews.splice(2, 0, bonusView);

                // Add ad at position 6.
                self.listItemViews.splice(5, 0, adView);
            } else if (dataLength >= 3) {
                // Add visualization at position 2.
                self.listItemViews.splice(1, 0, bonusView);

                // Add ad at position 5.
                self.listItemViews.splice(4, 0, adView);
            } else {
                // Add visualization at position 2.
                self.listItemViews.splice(1, 0, bonusView);
            }
        } else {
            var noItemsView = new NoItemsView({
                chaperone: self
            });
            self.listItemViews.push(noItemsView);

            adView = new AdView({
                chaperone: self
            });
            self.listItemViews.push(adView);
        }

        return self;
    },

    buildList: function() {
        var self = this,
            fc = self.facetConfig,
            listDiv = self.$el.find("." + fc.listClass),
            listHeaderView = self.listHeaderView,
            paginationView = self.paginationView;

        self.createURL().fetchItems(function(data) {
            var headerH3 = self.$el.find("h3"),
                paginationElement = self.$el.find(".pagination"),
                adClass = fc.itemClasses.advertisement;

            if (data.status[0] == "2") {
                listDiv.empty();

                fc.storeListResponseData(self, data);

                if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
                        fc.renderRightNav(self);

                        self.chaperone.view.rightMenu.render();
                }

                listHeaderView.emptyElement()
                                    .setElement(headerH3)
                                    .render();

                self.populateListItems();

                _.each(self.listItemViews, function(itemView) {
                    var itemHolder = $(itemView.buildItemHolder());
                    listDiv.append(itemHolder);

                    itemView.setElement(itemHolder)
                            .render()
                            .bindEvents();
                });

                paginationView.emptyElement()
                                .setElement(paginationElement)
                                .render();
            } else {
                // Status handling TK.
            }
        });

        return self;
    },

    render: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                _.template(
                    $("#back-button-contents").html(),
                    {}
                )
            );
        }

        if (navView.$el.find(".right-small > *").length === 0) {
            navView.$el.find(".right-small").html(
                _.template(
                    $("#menu-button-contents").html(),
                    {}
                )
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        navView.$el.find(".right-small .menu-icon").unbind();

        var htmlContents = _.template(
            $("#list-template").html(),
            {
                listHolderID: fc.listHolderID,
                listHeaderBase: fc.listHeaderBase,
                listClass: fc.listClass
            }
        );

        self.$el.html(htmlContents);

        if (_.has(self.queryDict, 'page')) {
            if (parseInt(self.queryDict.page, 10) == 1) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                if (_.isEmpty(pagelessQueryDict)) {
                    redirectURL = "!/" + self.facetSlug + "/";
                } else {
                    redirectURL = "!/" + self.facetSlug +
                        "/refine/" + self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                        "/";
                }

                self.chaperone.navigate(redirectURL, false);
            }
        }

        self.buildList();

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView;

        $(".exit-off-canvas").on('click', function(event) {
            event.stopPropagation();

            $(".off-canvas-wrap").removeClass("move-left");

            return false;
        });

        var backNav = navView.$el.find(".back-button"),
            menuNav = navView.$el.find(".menu-icon"),
            prevURL;

        backNav.unbind();
        menuNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });
        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });
        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if ((_.has(self.queryDict, 'page')) &&
                        (self.queryDict.page > 1)) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                pagelessQueryDict.page = self.queryDict.page - 1;

                prevURL = "!/" + self.facetSlug + "/refine/" +
                                    self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                            "/";
            } else if ((!_.isEmpty(self.queryDict)) &&
                        (!_.has(self.queryDict, 'page'))) {
                if (!_.isEmpty(self.chaperone.view.tagArchiveQueryDict)) {
                    prevURL = "!/" + self.facetSlug + "/tags/" +
                            self.facetConfig.reassembleFacets(
                                    self.chaperone.view
                                        .tagArchiveQueryDict
                            ) + "/";
                } else {
                    prevURL = "!/" + self.facetSlug + "/";
                }
            } else {
                prevURL = "!/";
            }

            self.chaperone.navigate(prevURL, true);

            return false;
        });

        if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
            menuNav.on('touchstart', function(event) {
                $(this).addClass('tapped');
            });
            menuNav.on('touchend', function(event) {
                $(this).removeClass('tapped');
            });
            menuNav.on('click', function(event) {
                event.stopPropagation();

                reframeWindow();

                $(this).addClass('chosen');
                $(this).removeClass('tapped');

                $(".off-canvas-wrap").addClass("move-left");

                return false;
            });
        }

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
            if (!rightNav.is(":visible")) {
                if (previousView !== null) {
                    rightNav.delay(200).fadeIn(450);
                } else {
                    rightNav.show();
                }
            } else {
                if (previousView !== null) {
                    rightNav.fadeOut(325);
                    rightNav.fadeIn(325);
                }
            }
        } else {
            if (rightNav.is(":visible")) {
                if (previousView !== null) {
                    rightNav.fadeOut(450);
                } else {
                    rightNav.hide();
                }
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var PaginationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            queryDict = _.clone(self.chaperone.queryDict),
            pagelessQueryDict = "";

        delete queryDict.page;

        if (!_.isEmpty(queryDict)) {
            pagelessQueryDict = self.chaperone.facetConfig
                                                .reassembleFacets(
                                                    queryDict
                                                ) + ",";
        }

        var htmlContents = _.template(
            $("#" + self.chaperone.facetConfig.templateIDs.pagination).html(),
            {
                facetSlug: self.chaperone.facetSlug,
                paginationData: self.chaperone.paginationData,
                pagelessQueryDict: pagelessQueryDict
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var VisualizationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.facets != "undefined") {
                var facetList = config.facets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseListViewFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/in-depth/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.chaperone.view.tagArchiveQueryDict = {};

        self.isFacetlessView = _.isEmpty(
            self.chaperone.view.listQueryDict
        );
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.listQueryDict = qd;

        return self;
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig,
            templateID = fc.templateIDs.visualization,
            htmlContents;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                _.template(
                    $("#back-button-contents").html(),
                    {}
                )
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        fc.renderVisualization(self, function(data) {
            if (data.status[0] == "2") {

                _.each(fc.visualizationDataMap, function(value, key) {
                    self[key] = data[value];
                });

                var values = fc.generateVisualizationContext(self);

                htmlContents = _.template(
                    $("#" + templateID).html(),
                    values
                );
            }

            self.$el.html(htmlContents);

            fc.visualizationPostRenderHooks(self);

            self.bindEvents();
        });

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            listQuery = self.chaperone.view.listQueryDict,
            listURL;

        var backNav = navView.$el.find(".back-button"),
            appTrigger = $(".about-app-trigger");

        appTrigger.unbind();

        appTrigger.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        appTrigger.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        appTrigger.on('click', function(event) {
            event.stopPropagation();

            $(this).removeClass('tapped');

            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");

                $(this).next().slideUp(650);
            } else {
                $(this).parent().addClass("active");

                $(this).next().slideDown(650);
            }
        });

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if (self.isFacetlessView) {
                listURL = "!/" + self.facetSlug + "/";
            } else {
                listURL = "!/" + self.facetSlug +
                        "/refine/" +
                        self.facetConfig.reassembleFacets(
                            listQuery
                        ) + "/";
            }

            self.chaperone.navigate(
                listURL,
                true
            );

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});

var DetailView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.dataID != "undefined") {
                self.dataID = config.dataID;
            }
        }

        self.isFacetlessView = _.isEmpty(
                                self.chaperone.view
                                            .listQueryDict
                            );
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug].detail(self);

        return self;
    },

    fetchItem: function(callbackFunction) {
        var self = this,
            ajaxConfig = {
                url: self.queryURL,
                dataType: "jsonp",
                // jsonpCallback: self.facetConfig.callbacks.detail,
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            };

        if (_.has(self.facetConfig, "callbacks")) {
            if (_.has(self.facetConfig.callbacks, "detail")) {
                ajaxConfig.jsonpCallback = self.facetConfig.callbacks.detail;
            }
        }

        $.ajax(ajaxConfig);
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                _.template(
                    $("#back-button-contents").html(),
                    {}
                )
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        self.createURL().fetchItem(function(data) {
            var htmlContents = "";

            if (data.status[0] == "2") {
                self.rowContext = fc.generateDetailViewContext(
                    data,
                    {
                        facetSlug: self.facetSlug
                    }
                );

                htmlContents = _.template(
                    $("#" + fc.templateIDs.detail).html(),
                    self.rowContext
                );
            } else {
                // Status handling TK.
            }

            self.$el.html(htmlContents);

            self.postRender().bindEvents();
        });

        return self;
    },

    postRender: function() {
        var self = this,
            fc = self.facetConfig;

        fc.detailPostRenderHooks(self);

        return self;
    },

    bindEvents: function(callbackFunction) {
        var self = this,
            navView = self.chaperone.view.navView,
            listQuery = self.chaperone.view.listQueryDict,
            listURL;

        var backNav = navView.$el.find(".back-button"),
            appTrigger = $(".about-app-trigger");

        appTrigger.unbind();

        appTrigger.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        appTrigger.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        appTrigger.on('click', function(event) {
            event.stopPropagation();

            $(this).removeClass('tapped');

            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");

                $(this).next().slideUp(650);
            } else {
                $(this).parent().addClass("active");

                $(this).next().slideDown(650);
            }
        });

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if (self.isFacetlessView) {
                listURL = "!/" + self.facetSlug + "/";
            } else {
                listURL = "!/" + self.facetSlug +
                        "/refine/" +
                        self.facetConfig.reassembleFacets(
                            listQuery
                        ) + "/";
            }

            self.chaperone.navigate(
                listURL,
                true
            );

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});

var ListHeaderView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            templateID = fc.templateIDs.listHeader;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {
                baseDisplay: fc.listHeaderBase,
                enhancedDisplay: fc.enhanceHeader(self.chaperone),
                currentPage: self.chaperone.paginationData.currentPage,
                totalPages: self.chaperone.paginationData.totalPages
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});

var ListItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.data != "undefined") {
                self.data = config.data;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses.detail;

        return '<li class="' + itemClass + '" data-id="' +
                                self.data.id + '"></li>';
    },

    render: function() {
        var self = this,
            templateID = self.chaperone.facetConfig
                                        .templateIDs
                                        .listItem;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {
                rowData: self.data,
                facetSlug: self.chaperone.facetSlug
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        self.$el.unbind();

        self.$el.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        self.$el.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        return self;
    }
});


var NoItemsView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses
                                        .placeholder;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig,
            templateID = facetConfig.templateIDs.placeholderLI;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {}
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var AdView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses.advertisement;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig,
            templateID = facetConfig.templateIDs.adLI;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {
                cbValue: Date.now()
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var ListBonusView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }

        self.pagelessQueryDict = _.clone(self.chaperone.queryDict);
        delete self.pagelessQueryDict.page;
    },

    buildItemHolder: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            itemClass = fc.generateBonusItemClass(self);

        return '<li class="bonus-item ' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            facetSlug = self.chaperone.facetSlug,
            templateID = fc.templateIDs.bonusLI,
            listURL,
            context = fc.generateBonusItemContext(self);

        context.itemURL = fc.generateBonusItemURL(self);

        var htmlContents = _.template(
            $("#" + templateID).html(),
            context
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            facetSlug = self.chaperone.facetSlug;

        self.$el.unbind();

        self.$el.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        self.$el.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        return self;
    }
});


var TagArchiveView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;

                self.setQueryDict({});
            } else {
                self.setQueryDict({});
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.queryDict != "undefined") {
                self.setQueryDict(config.queryDict);
            }

            if (typeof config.initialFacets != "undefined") {
                var facetList = config.initialFacets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseTagArchiveFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.listHeaderView = new TagArchiveHeaderView({
            chaperone: self
        });

        self.isFacetlessView = _.isEmpty(
            self.chaperone.view.tagArchiveQueryDict
        );

        self.paginationView = new TagPaginationView({
            chaperone: self
        });
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.tagArchiveQueryDict = qd;

        return self;
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug]
                            .tagArchive(self);

        return self;
    },

    fetchItems: function(callbackFunction) {
        var self = this;

        $.ajax({
            url: self.queryURL,
            dataType: "jsonp",
            // jsonpCallback: self.facetConfig.callbacks.tagArchive,
            type: "GET",
            jsonp: "callback",
            contentType: "application/json",
            success: function(data) {
                if (typeof callbackFunction != "undefined") {
                    if (callbackFunction !== null) {
                        callbackFunction(data);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // TODO: Capture error and send to Sentry.
            }
        });
    },

    populateListItems: function() {
        var self = this,
            adView,
            dataLength = self.collectionData.length;

        self.listItemViews = [];

        if (dataLength > 0) {
            _.each(self.collectionData, function(row) {
                var listItem = new TagArchiveItemView({
                    chaperone: self,
                    data: row
                });

                self.listItemViews.push(listItem);
            });

            if (dataLength >= 3) {
                adView = new AdView({
                    chaperone: self
                });
            }

            if (dataLength >= 3) {
                // Add visualization at position 2.
                self.listItemViews.splice(2, 0, adView);
            } else {
                // Add visualization at position 1.
                self.listItemViews.splice(1, 0, adView);
            }
        } else {
            var noTagItemsView = new NoTagItemsView({
                chaperone: self
            });
            self.listItemViews.push(noTagItemsView);

            adView = new AdView({
                chaperone: self
            });
            self.listItemViews.push(adView);
        }

        return self;
    },

    buildList: function() {
        var self = this,
            fc = self.facetConfig,
            listDiv = self.$el.find("." + fc.tagArchiveClass),
            listHeaderView = self.listHeaderView,
            paginationView = self.paginationView;

        self.createURL().fetchItems(function (data) {
            var headerH3 = self.$el.find("h3"),
                paginationElement = self.$el.find(".pagination"),
                adClass = fc.itemClasses.tagAdvertisement;

            if (data.status[0] == "2") {
                listDiv.empty();

                self.collectionData = data.tags;

                self.paginationData = data.pagination;

                listHeaderView.emptyElement()
                                .setElement(headerH3)
                                .render();

                self.populateListItems();

                _.each(self.listItemViews, function(itemView) {
                    var itemHolder = $(itemView.buildItemHolder());
                    listDiv.append(itemHolder);

                    itemView.setElement(itemHolder).render();
                });

                paginationView.emptyElement()
                                .setElement(paginationElement)
                                .render();
            } else {
                // Status handling TK.
            }
        });

        return self;
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView;
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                _.template(
                    $("#back-button-contents").html(),
                    {}
                )
            );
        }

        if (navView.$el.find(".right-small > *").length === 0) {
            navView.$el.find(".right-small").html(
                _.template(
                    $("#menu-button-contents").html(),
                    {}
                )
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        navView.$el.find(".right-small .menu-icon").unbind();

        var htmlContents = _.template(
            $("#tag-archive-template").html(),
            {
                listHolderID: fc.listHolderID,
                tagArchiveHeaderPlaceholder: fc
                                .tagArchiveHeaderPlaceholder,
                tagArchiveClass: fc.tagArchiveClass
            }
        );

        self.$el.html(htmlContents);

        if (_.has(self.queryDict, 'page')) {
            if (parseInt(self.queryDict.page, 10) == 1) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                if (_.isEmpty(pagelessQueryDict)) {
                    redirectURL = "!/" + self.facetSlug + "/tags/";
                } else {
                    redirectURL = "!/" + self.facetSlug +
                        "/tags/" + self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                        "/";
                }

                self.chaperone.navigate(redirectURL, false);
            }
        }

        self.buildList();

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            prevURL,
            backNav = navView.$el.find(".back-button");

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });
        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });
        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if ((_.has(self.queryDict, 'page')) &&
                        (self.queryDict.page > 1)) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                pagelessQueryDict.page = self.queryDict.page - 1;

                prevURL = "!/" + self.facetSlug + "/tags/" +
                                    self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                            "/";
            } else if ((!_.isEmpty(self.queryDict)) &&
                        (!_.has(self.queryDict, 'page'))) {
                prevURL = "!/" + self.facetSlug + "/tags/";
            } else {
                prevURL = "!/" + self.facetSlug + "/";
            }

            self.chaperone.navigate(prevURL, true);

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var TagArchiveHeaderView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            templateID = fc.templateIDs.tagArchiveHeader;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {
                baseDisplay: fc.listHeaderBase,
                enhancedDisplay: fc.enhanceTagArchiveHeader(
                    self.chaperone
                )
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var TagPaginationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            queryDict = _.clone(self.chaperone.queryDict),
            pagelessQueryDict = "";

        delete queryDict.page;

        if (!_.isEmpty(queryDict)) {
            pagelessQueryDict = self.chaperone.facetConfig
                                                .reassembleFacets(
                                                    queryDict
                                                ) + ",";
        }

        var htmlContents = _.template(
            $("#tag-pagination-template").html(),
            {
                facetSlug: self.chaperone.facetSlug,
                paginationData: self.chaperone.paginationData,
                pagelessQueryDict: pagelessQueryDict
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var TagArchiveItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.data != "undefined") {
                self.data = config.data;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                    .itemClasses.tagArchiveItem;

        return '<li class="' + itemClass + '" data-slug="' +
                                self.data.slug + '"></li>';
    },

    render: function() {
        var self = this,
            templateID = self.chaperone.facetConfig
                                    .templateIDs.tagArchiveItem;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {
                facetSlug: self.chaperone.facetSlug,
                rowData: self.data
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var NoTagItemsView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses
                                        .placeholder;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig,
            templateID = facetConfig.templateIDs.placeholderLI;

        var htmlContents = _.template(
            $("#" + templateID).html(),
            {}
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var AppRouter = Backbone.Router.extend({
    routes: {
        "!/": "homeScreen",
        "!/:facetSlug/": "facetList",
        "!/:facetSlug/in-depth/": "facetDataVis",
        "!/:facetSlug/refine/:facets/": "facetList",
        "!/:facetSlug/refine/:facets/in-depth/": "facetDataVis",
        "!/:facetSlug/tags/": "allTags",
        "!/:facetSlug/tags/:facets/": "allTags",
        "!/:facetSlug/items/:itemID/": "facetDetail"
    },

    initialize: function() {
        var self = this;

        self.view = new AppView({ el: $("#app") });

        var foundURL = Backbone.history.start();
        if (foundURL === false) {
            self.navigate("!/", {
                trigger: true
            });
        }
    },

    homeScreen: function() {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 0;

        var homepage = new HomepageView({
            chaperone: self
        });

        mainView.attachView(homepage, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetList: function(facetSlug, initialFacets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 1;

        var list = new ListView({
            chaperone: self,
            facetSlug: facetSlug,
            initialFacets: initialFacets
        });

        mainView.attachView(list, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetDataVis: function(facetSlug, facets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 2;

        var dataVis = new VisualizationView({
            chaperone: self,
            facetSlug: facetSlug,
            facets: facets
        });

        mainView.attachView(dataVis, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetDetail: function(facetSlug, itemID) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 2;

        var detail = new DetailView({
            chaperone: self,
            facetSlug: facetSlug,
            dataID: itemID
        });

        mainView.attachView(detail, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    allTags: function(facetSlug, initialFacets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 1;

        var tagArchive = new TagArchiveView({
            chaperone: self,
            facetSlug: facetSlug,
            initialFacets: initialFacets
        });

        mainView.attachView(tagArchive, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    }
});


function deleteView(backboneView) {
    backboneView.undelegateEvents();
    backboneView.$el.removeData().unbind();
    backboneView.$el.empty();
    backboneView.stopListening();

    return backboneView;
}


function resizeChoropleth() {
    var mapHolderWidth = $(".map-holder").width(),
        statelyWidth = mapHolderWidth;

    if (mapHolderWidth > 600) {
        statelyWidth = 600;
    }

    $(".stately").width(statelyWidth);
    $(".stately li").css({"font-size": statelyWidth});
}


function reframeWindow() {
    var windowHeight = $(window).height(),
        classList = [
            ".homepage",
            ".list-view",
            ".detail-view",

            ".homepage .exit-off-canvas",
            ".list-view .exit-off-canvas",
            ".detail-view .exit-off-canvas",

            ".right-off-canvas-menu",
            ".tab-bar .exit-off-canvas"
        ];

    $(classList).each(function(i, inheritingClass) {
        var newHeight = 0;

        if (
                inheritingClass == ".right-off-canvas-menu"
            ) {
            newHeight = windowHeight;
        } else if (
                inheritingClass == ".tab-bar .exit-off-canvas"
            ) {
            newHeight = $(".tab-bar").outerHeight();
        } else if (
                inheritingClass == ".homepage .exit-off-canvas"
            ) {
            newHeight = $($(".homepage > *")[0]).outerHeight();
        } else if (
                inheritingClass == ".list-view .exit-off-canvas"
            ) {
            newHeight = $($(".list-view > *")[0]).outerHeight();
        } else if (
                inheritingClass == ".detail-view .exit-off-canvas"
            ) {
            newHeight = $($(".detail-view > *")[0]).outerHeight();
        } else {
            newHeight = windowHeight - $(".tab-bar").outerHeight();
        }

        $(inheritingClass).height(newHeight);
    });

    resizeChoropleth();
}