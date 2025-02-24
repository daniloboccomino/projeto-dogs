export const API_URL = 'https://dogsapi.origamid.dev/json'
const token = window.localStorage.getItem('token')

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  }
}

export const USER = {
  GET(token) {
    return {
      url: API_URL + '/api/user',
      options: {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    }
  },
  POST(body) {
    return {
      url: API_URL + '/api/user',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    }
  },
  STATS() {
    return {
      url: API_URL + '/api/stats',
      options: {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    }
  },
}

export const PHOTO = {
  GET(id) {
    return {
      url: `${API_URL}/api/photo/${id}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    }
  },
  GET_ALL({ page, total, user }) {
    return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
      options: {
        method: 'GET',
        cache: 'no-store',
      },
    }
  },
  POST(token, formData) {
    return {
      url: API_URL + '/api/photo',
      options: {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: formData,
      },
    }
  },
  DELETE(id) {
    return {
      url: `${API_URL}/api/photo/${id}`,
      options: {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    }
  },
}

export function COMMENT_POST(id, token, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  }
}

export const PASSWORD = {
  LOST: {
    POST(body) {
      return {
        url: `${API_URL}/api/password/lost`,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      }
    },
  },
  RESET: {
    POST(body) {
      return {
        url: `${API_URL}/api/password/reset`,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      }
    },
  },
}
