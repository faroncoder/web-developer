var WebDeveloper = WebDeveloper || {};

WebDeveloper.Generated = WebDeveloper.Generated || {};

// Initializes the page with data
WebDeveloper.Generated.initialize = function(data, locale)
{
	var contentDocument = null;
	var documents				= data.documents;
	var linkDescription = null;
	var linkInformation = locale.linkInformation;
	var linksLength			= null;
	var list						= null;

	WebDeveloper.Generated.emptyContent();
	WebDeveloper.Generated.localizeHeader(locale);
	WebDeveloper.Generated.setPageTitle(linkInformation, data, locale);

	// Loop through the documents
	for(var i = 0, l = documents.length; i < l; i++)
	{
		contentDocument = documents[i];
		linkDescription = locale.links.toLowerCase();
		linksLength			= contentDocument.links.length;

		// If there is only one link
		if(linksLength == 1)
		{
			linkDescription = locale.link.toLowerCase();
		}

		WebDeveloper.Generated.addDocument(contentDocument.url, i, linkDescription, linksLength);

		// If there are links
		if(linksLength > 0)
		{
			list = $("<ol></ol>");

			list.append(ich.links(contentDocument));
			$("#content").append(list);
		}

		WebDeveloper.Generated.addSeparator();
	}

	WebDeveloper.Generated.initializeCommonElements();
};
