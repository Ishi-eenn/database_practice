async function request(path, options = null) {
	const url = `${import.meta.env.VITE_API_ENDPOINT}${path}`;
	const response = await fetch(url, options);
	return response.json();
  }

  export function getToDoLists() {
	return request("/todo-lists");
  }

  export function postToDoList(todoList) {
	return request("/todo-lists", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(todoList),
	  });
  }

  export function deleteToDoList(id) {
	return request(`/todo-lists/${id}`, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({}),
	});
  }

  export function getLogin() {
	return request("/login");
  }





  export function getPublishers() {
	return request("/publishers");
  }

  export function postPublisher(publisher) {
	return request("/publishers", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(publisher),
	});
  }

  export function getAuthors() {
	return request("/authors");
  }

  export function postAuthor(author) {
	return request("/authors", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(author),
	});
  }

  export function getBooks() {
	return request("/books");
  }

  export function postBook(book) {
	return request("/books", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(book),
	});
  }

  export function getLendings() {
	return request("/lendings");
  }

  export function postLending(lending) {
	return request("/lendings", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(lending),
	});
  }

  export function postLendingReturn(lendingId) {
	return request(`/lendings/${lendingId}/return`, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify({}),
	});
  }

  export function getUsers() {
	return request("/users");
  }

  export function postUser(user) {
	return request("/users", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(user),
	});
  }
