export const create = async (request, reply) => {
  try {
    const payload = request.payload;
    const pattern = {role: 'order', cmd: 'create', emission: payload.emission, price: payload.price, client: payload.client};

    request.seneca.log.info('POST ORDER', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply(response.order);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
};

export const update = async (request, reply) => {
  try {
    const id = request.params.id;
    const payload = request.payload;
    const pattern = {role: 'order', cmd: 'update', id: id, emission: payload.emission, price: payload.price, client: payload.client};

    request.seneca.log.info('PUT ORDER', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply(response.order);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
};

export const destroy = async (request, reply) => {
  try {
    const id = request.params.id;
    const pattern = {role: 'order', cmd: 'update', id: id};

    request.seneca.log.info('DELETE ORDER', id);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply(response.order);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
};
