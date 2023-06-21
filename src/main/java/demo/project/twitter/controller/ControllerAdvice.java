package demo.project.twitter.controller;


import demo.project.twitter.dto.response.ExceptionResponse;
import demo.project.twitter.dto.response.ValidationErrorResponse;
import demo.project.twitter.dto.response.ViolationResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

@org.springframework.web.bind.annotation.ControllerAdvice
public class ControllerAdvice {
    @ResponseBody
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorResponse onConstraintViolationsException(ConstraintViolationException ex) {
        final List<ViolationResponse> violations = ex.getConstraintViolations().stream()
                .map(
                        violation -> new ViolationResponse(
                                violation.getPropertyPath().toString(),
                                violation.getMessage()
                        )
                )
                .collect(Collectors.toList());
        return new ValidationErrorResponse(violations);
    }



    @ResponseBody
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ValidationErrorResponse onMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        final List<ViolationResponse> violations = ex.getBindingResult().getFieldErrors().stream()
                .map(error -> new ViolationResponse(error.getField(), error.getDefaultMessage()))
                .collect(Collectors.toList());
        return new ValidationErrorResponse(violations);
    }

    @ResponseBody
    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionResponse onMethodArgumentNotValidException(RuntimeException ex) {
        return new ExceptionResponse(ex.getMessage());
    }

}
