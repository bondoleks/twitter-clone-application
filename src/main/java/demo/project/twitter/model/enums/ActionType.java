package demo.project.twitter.model.enums;

public enum ActionType {
    LIKE("LIKE"),
    BOOKMARK("BOOKMARK"),
    RETWEET("RETWEET");

    private String type;
    //##
    ActionType(String type){
        this.type = type;
    }

    public String getType(){
        return type;
    }
}
