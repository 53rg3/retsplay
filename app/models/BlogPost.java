package models;

public class BlogPost {

    private String id;

    private String title = null;

    private String post = null;

    private String tags = null;

    public BlogPost(String id, String title, String post, String tags) {
        this.id = id;
        this.title = title;
        this.post = post;
        this.tags = tags;
    }

    public BlogPost() {}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String toString() {
        return "Employee [(ID: " + this.getId() + ", Title: " + this.getTitle() + ", Post: " + this.getPost() + ", Tags: " + this.getTags() + "]";
    }
}
