/**
 * Abstract base class for a generic repository.
 *
 * @template Request - The type of the input parameter for the repository operation.
 * @template Response - The type of the result returned by the repository operation.
 *
 * Implementations should provide the logic for the `run` method to handle data access or persistence.
 */
export abstract class Repository<Request, Response> {
  abstract run(request: Request): Promise<Response>;
}
