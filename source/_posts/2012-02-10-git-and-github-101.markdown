---
layout: post
type: text
date: 2012-02-10 15:31
text: 
  title: Git & GitHub 101
permalink: 2012/02/git-and-github-101
---

<script src="http://speakerdeck.com/embed/4ed3a35e5672e1004d008b5b.js"></script>

<br />

Today I gave a presentation to my <abbr title="Advanced Placement">AP</abbr> Computer Science class that introduced them to [Git](http://git-scm.com/) and [GitHub](http://github.com). I watched as most of it sailed over their heads, so I'm going to try and re-explain it more coherently with text.


<h3>What is version control?</h3>

Generally, [version control system](http://en.wikipedia.org/wiki/Revision_control) (like Git&mdash;others include [Subversion](http://subversion.apache.org/), [Bazaar](http://bazaar.canonical.com/en/), and [Mercurial](http://mercurial.selenic.com/) refers to the tracking and control of changes in a project. All of these systems provide the same basic features.

<h4>Backup & Restore</h4>

If you're using a website like GitHub, you have code backup built right in. You always have your code, along with its entire history, saved elsewhere.

<h4>Synchronization & Collaboration</h4>

It is so much easier to share files among developers &mdash;no more uploading zipped files or swapping USB sticks. Plus, you can always have current code.

<h4>Undo</h4>

No mistake is too large (or too small) to handle. Perhaps you add some code to the wrong file and need to revert back. Or you could screw up four hours of work and need to start over. Either way, a VCS can handle it.

<h4>History</h4>

As you update files, you can see who and where files were changed. Changes can be tracked down to the line number.

<h4>Sandboxing</h4>

With branching and merging (which I will get to later), you can experiment without damaging the core code.


<h3>Why Git?</h3>

There is an [entire website](http://whygitisbetterthanx.com/) dedicated to defending the integrity of us Git users.

1. **Local branching** &mdash; Git allows for you to have branches completely independent (or dependent) from each other.
2. **Git is fast and small** &mdash; Everything is done locally, so it consumes less disk space quicker.
3. **Easy to learn** &mdash; It may not seem it right now, but you get used to using Git very quickly.
4. **GitHub** &mdash; GitHub is a reason in itself for using Git. Nothing else compares.


<br /><hr /><br />

<h3>The Concepts Behind Git</h3>

There are several concepts that are necessary to understand to use Git effectively.

<h4>Repositories</h4>

A repository is, in essence, a directory. This directory is where your project lives, and, most importantly, the <code>.git/</code> directory. This special, hidden folder acts as a database, tracking changes and users.

![A basic repository structure.](http://hoth.entp.com/output/scm.png)

A repository is either <em>local</em> or <em>remote</em>. A local repository is where you make changes to the files, stage (prepare) the changes, and push to the remote repository. A good example of a remote repository is GitHub. No changes are made here, but it is a central location for a version of the repository to live.

<h4>Branches & Merging</h4>

Another important concept is *branches*. I think the [Version Control for Designers](http://hoth.entp.com/output/git_for_designers.html) said it best.

> Branches fulfill the same role as drafts when writing an email. You work on the draft, saving it frequently until it is complete; then, when it’s done, you send the email, and the draft is deleted. In this case, the outbox is not polluted by your frequent changes, until you hit "send".

Basically, by doing work on new features or radical changes in branches you keep your main branch (in Git, this is called the <code>master</code> branch) uncluttered and always stable.

![A branching and merging diagram.](http://hoth.entp.com/output/branching.png)

Once you are done with this new feature, you can incorporate the changes you've made by *merging* the new branch into the master branch. This intelligently replaces the old files with the ones you've changed.


<br /><hr /><br />

<h3>Workflow</h3>

So, now that you understand the concepts behind Git, how do you actually *use* Git? For that, there are two options.

1. **Command line** &mdash; Whether you're in a Linux Bash Terminal or Windows Command Prompt, this is the way to go with Git.
2. **GUIs** &mdash; People who use GUIs are either designers or chickens. So don't be that guy.

I won't go into detail on how to install Git on your machine. Don't worry&mdash;it's easy. GitHub [has an excellent guide](http://help.github.com/set-up-git-redirect).

The next part is about using the CLI. To learn how to use a GUI, you may have to go elsewhere.

<h4>Cloning</h4>

To get a version of a repository you use the <code>clone</code> command.

<pre>
$ git clone git@github.com:eturk/apcs.git folder-name
Initialized empty Git repository in /var/www/folder-name/.git/
remote: Counting objects: 468, done.
remote: Compressing objects: 100% (320/320), done.
remote: Total 468 (delta 158), reused 411 (delta 109)
Receiving objects: 100% (468/468), 3.98 MiB | 1.19 MiB/s, done.
Resolving deltas: 100% (158/158), done.
</pre>


<h4>Branching and Merging</h4>

Changing to a branch is easy with the <code>checkout</code> command.

<pre>
$ git checkout other-branch
Switched to branch 'other-branch'
</pre>

Merging is also easy. Change branches to the branch you want to merge into, then use the <code>merge</code> command.

<pre>
git merge other-branch
Updating 8bd6d8b..8f7c949
Fast-forward
 more.txt |    1 -
 test.txt |    1 -
 2 files changed, 0 insertions(+), 2 deletions(-)
 delete mode 100644 more.txt
 delete mode 100644 test.txt
</pre>


<h4>Commit</h4>

To create a new commit (a notification to Git that you changed some files), you first have to add (or remove) files from the staging area, then use the <code>commit</code> command, usually with the <code>-m</code> flag and a message.

<pre>
$ git add .
$ git rm some/unnecessary/file.txt
$ git add blah/Poker.java
$ git commit -m "A description of the changes I made."
[master 594f90b] A description of the changes I made.
 1 files changed, 2 insertions(+), 2 deletions(-)
</pre>


<h4>Statuses & Resetting</h4>

One of the most confusing commands of Git is <code>reset</code>. First, to see the state of your un-committed or committed files, you can use <code>status</code>.

<pre>
$ git status -s
 M README
 M hello.rb
</pre>

If you want to get rid of these files, you can do so by using the following.

<pre>
$ git reset HEAD -- hello.rb
</pre>

Don't worry about what exactly this means for now. It confuses even the most seasoned of Git users, but there is plentiful information online.


<h4>Push & Pull</h4>

To move or get changes from a remote repository, you use <code>push</code> and <code>pull</code>, respectively.

<pre>
$ git pull origin master
remote: Counting objects: 4006, done.
remote: Compressing objects: 100% (1322/1322), done.
remote: Total 2783 (delta 1526), reused 2587 (delta 1387)
Receiving objects: 100% (2783/2783), 1.23 MiB | 10 KiB/s, done.
Resolving deltas: 100% (1526/1526), completed with 387 local objects.
From github.com:eturk/test
   8e29b09..c7c5a10  master     -> test/master
   0709fdc..d4ccf73  c-langs    -> test/c-langs
   6684f82..ae06d2b  java       -> test/java
 * [new branch]      ada        -> test/ada
 * [new branch]      lisp       -> test/lisp
</pre>

Right now, you are pulling from the main remote repository (<code>origin</code>) at the <code>master</code> branch. To push is similar.

<pre>
$ git push origin master
Counting objects: 25, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (25/25), done.
Writing objects: 100% (25/25), 2.43 KiB, done.
Total 25 (delta 4), reused 0 (delta 0)
To git@github.com:eturk/test.git
 * [new branch]      master -> master
</pre>


<h4>So what will my workflow look like?</h4>

Here's an example.

<pre>
...make changes...

$ git add .
$ git commit -m 'Changed some methods around, rebuilt class?'
$ git push
$ git checkout -b rebuilt-poker-class

...make more changes...

$ git add .
$ git commit -m 'Done with new rebuilt class.'
$ git push
$ git checkout master
$ git merge rebuilt-poker-class
$ git push
</pre>

<br /><hr /><br />

<h3>Best Practices</h3>

If there is anything you can take away from this, it's *commit and pull often*. Just like you save a school paper often, the more commits you make, the more specific you can be when reverting and undoing. Pulling often gets you the latest code with the least amount of merge conflicts.

<br /><hr /><br />

<h3>GitHub</h3>

Even if you hate Git, you still can love GitHub. Founded in 2008, it has exploded to over one million users and over two million active repositories. Needless to say, there is a lot to like about the site.

* Browse code online with syntax highlighting.
* View complete project history.
* Blame and annotations (who made changes and where).
* A powerful online editor.
* A [Git-powered wiki](https://github.com/github/gollum) for each project.
* Issues (issue tracking with milestones, labels, and search).
* Code Review (Pull Request = Code + Issue + Comments)
* Comments (make notes on commits, issues, even specific lines of code).
* Fancy graphs to see networks, clone history, and traffic.
* Compare view to graphically view the <code>diff</code> between commits.
* A strong community (you can find and "watch" interesting projects and developers).

I'm not going into detail on how to use GitHub here, given that their [help center](http://help.github.com/) is so good.


<br /><hr /><br />

<h3>Further Reading</h3>

There is a plethora of information on the 'Net if you care to look, but here's the best.

* [github:help](http://help.github.com/) &mdash; GitHub's help center gives support on Git and GitHub alike.
* [git tutorial](http://schacon.github.com/git/gittutorial.html) &mdash; Scott Chacon's tutorial is excellent for beginners.
* [Version Control for Designers](http://hoth.entp.com/output/git_for_designers.html) &mdash; A very simplistic and easy to digest guide on VCS in general.
