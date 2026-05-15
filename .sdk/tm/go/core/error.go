package core

type CrossrefRestError struct {
	IsCrossrefRestError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCrossrefRestError(code string, msg string, ctx *Context) *CrossrefRestError {
	return &CrossrefRestError{
		IsCrossrefRestError: true,
		Sdk:              "CrossrefRest",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CrossrefRestError) Error() string {
	return e.Msg
}
