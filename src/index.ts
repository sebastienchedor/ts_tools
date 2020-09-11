export type Result<TResult, ErrorTypes extends string> =
	| {
			error: false;
			value: TResult;
	  }
	| {
			error: true;
			type: ErrorTypes;
			message: string;
	  };
