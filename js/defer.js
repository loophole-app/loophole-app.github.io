autocomplete(document.getElementById("schoolInput"), names);
document.getElementById("submit").addEventListener("click", async function() {
	schoolName = document.getElementById("schoolInput").value;
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	school_url = schoolURLFromName(schoolName);
	login_url = loginURL(school_url);
	var headers = new Headers();
	var basic = btoa(`${username}:${password}`)
	let request = await fetch(login_url, {
		headers: {
			"Authorization": `Basic ${basic}`,
			"origin": "*"
		}
	});
	let binary = await request.arrayBuffer();
	let response = new TextDecoder().decode(binary);
	console.log(login_url);
	console.log(request.status);
	console.log(response);
});
